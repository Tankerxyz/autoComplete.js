import { renderResults as autoCompleteView } from "../views/autoCompleteView";

async function aoeu() {

}

export default class autoComplete {

	isDataSrcValid(dataSrc) {
    if (Array.isArray(dataSrc)) {
      return true;
    } else if (dataSrc instanceof Promise) {
    	return true;
    } else if (typeof dataSrc === 'function') {
    	return true;
		} else {
    	return false;
		}
	}

	async getDataSrc(input) {
    if (Array.isArray(this.dataSrc)) {
      return this.dataSrc;
    } else if (typeof this.dataSrc === 'function') {
    	return await this.dataSrc(input);
    }
	}

	constructor(config) {
		// Source of data list
		this.dataSrc = config.dataSrc;

		// Placeholder text
		this.placeHolder = String(config.placeHolder) ? config.placeHolder : false;
		// Maximum Placeholder text length
		this.placeHolderLength = Number(config.placeHolderLength) ? config.placeHolderLength : Infinity;
		// Maximum number of results to show
		this.maxResults = Number(config.maxResults) ? config.maxResults : 10;
		// Highlighting matching results
		this.highlight = typeof config.highlight === "boolean" ? config.highlight : true;
		// Assign data attribute tag & value if set in object
		this.dataAttribute = config.dataAttribute === Object ? {
			tag: config.dataAttribute.tag,
			value: config.dataAttribute.value
		} : { tag: "autocomplete", value: "" };
		// Action function on result selection
		this.onSelection =
			typeof config.onSelection === "function" ? config.onSelection : autoCompleteView.error(
				"<strong>Error</strong>, <strong>onSelection</strong> value is not a <strong>Function</string>."
			);
		// Starts the app Enigne
		this.init();
	}

	// Search common characters within record
	search(query, record) {
		// Search query string sanitized & normalized
		query = query.replace(/ /g, "").toLowerCase();

		// Array of matching characters
		let match = [];

		// Query character position based on success
		let searchPosition = 0;

		// Iterate over record characters
		for (let number = 0; number < record.length; number++) {
			// Holds current record character
			let recordChar = record[number];

			// Matching case
			if (searchPosition < query.length && recordChar.toLowerCase() === query[searchPosition]) {
				if (this.highlight) {
					// Highlight matching character
					recordChar = "<span class=\"autoComplete_highlighted_result\">" + recordChar + "</span>";
					// Increment search position
					searchPosition++;
				} else {
					// Unhighlighted matching character
					recordChar;
					// Increment search position
					searchPosition++;
				}
			}
			// Adds matching character to the matching list
			match.push(recordChar);
		}

		// Non-Matching case
		if (searchPosition !== query.length) {
			return "";
		}

		// Return the joined match
		return match.join("");
	}

	// List all matching results
	listMatchedResults() {
		return new Promise((res) => {
      // Final highlighted results list of array
      this.resList = [];

      // Final clean results list of array
      this.cleanResList = [];

      // Holds the input search value
      let inputValue = autoCompleteView.getSearchInput().value;

      try {
        // Checks input matches in data source

        this.getDataSrc().then((dataSrc) => {
          dataSrc.filter(record => {
            const match = this.search(inputValue, record);
            if (match) {
              this.resList.push(match);
              this.cleanResList.push(record);

            }
          });

          // Rendering matching results to the UI list
          res(autoCompleteView.addResultsToList(
            this.resList.slice(0, this.maxResults),
            this.cleanResList.slice(0, this.maxResults),
            this.dataAttribute
          ));
				});
      } catch (error) {
        autoCompleteView.error(error);
      }
		});
	}

	// Checks user's input search value validity
	searchInputValidation(selector) {
		// Input field handler fires an event onKeyup action
		selector.addEventListener("keyup", async () => {
			// event.preventDefault();
			// Check if input is not empty or just have space before triggering the app
			if (selector.value.length > 0 && selector.value !== " ") {
				// clear results list
				autoCompleteView.clearResults();
				// List matching results
				this.listMatchedResults().then(() => {
          // Gets user's selection
          autoCompleteView.getSelection(this.onSelection, this.placeHolderLength);
				});
			} else {
				// clears all results list
				autoCompleteView.clearResults();
			}
		});
	}

	// Placeholder setting function
	setPlaceHolder() {
		if (this.placeHolder) {
			autoCompleteView.getSearchInput().setAttribute("placeholder", this.placeHolder);
		}
	}

	// Starts the app Enigne
	init() {
		try {
			// If the data source is valid run the app else error
			if (this.isDataSrcValid(this.dataSrc)) {
				this.setPlaceHolder();
				this.searchInputValidation(autoCompleteView.getSearchInput());
			}
		} catch (error) {
			console.log(error);

			autoCompleteView.error(
				"<strong>error</strong>, autoComplete <strong>engine</strong> is not <strong>starting</strong>..."
			);
		}
	}
}