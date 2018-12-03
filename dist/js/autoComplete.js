(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.autoComplete = factory());
}(this, (function () { 'use strict';

	const getSearchInput = () => document.querySelector("#autoComplete");
	const createResultsList = listContainer => {
		const list = document.createElement("ul");
		list.setAttribute("class", "autoComplete_results_list");
		listContainer.appendChild(list);
	};
	const createResultsListContainer = () => {
		const listContainer = document.createElement("div");
		listContainer.setAttribute("class", "autoComplete_results_list_container");
		getSearchInput().insertAdjacentElement("afterend", listContainer);
		createResultsList(listContainer);
	};
	createResultsListContainer();
	const addResultsToList = (results, cleanResults, dataAttribute) => {
		let resultState;
		const resultsList = document.querySelector(".autoComplete_results_list");
		results.forEach((event, record) => {
			const result = document.createElement("li");
			result.setAttribute(`data-${dataAttribute.tag}`, dataAttribute.value || cleanResults[record]);
			if (results.length === 1) {
				resultState = "autoComplete_result autoComplete_single_result";
			} else {
				resultState = "autoComplete_result";
			}
			result.setAttribute("id", cleanResults[record]);
			result.setAttribute("class", resultState);
			result.innerHTML = results[record];
			resultsList.appendChild(result);
		});
	};
	["focus", "blur"].forEach(eventType => {
		const result = document.querySelector(".autoComplete_results_list");
		getSearchInput().addEventListener(eventType, () => {
			if (eventType === "blur") {
				result.style = "opacity: 0; visibility: hidden;";
			} else {
				result.style = "opacity: 1; visibility: visible;";
			}
		});
	});
	const clearInput = () => getSearchInput().value = "";
	const clearResults = () => {
		const resultsList = document.querySelector(".autoComplete_results_list");
		resultsList.innerHTML = "";
	};
	const getSelection = (value, maxLength) => {
		const results = document.querySelectorAll(".autoComplete_result");
		results.forEach(selection => {
			selection.addEventListener("click", event => {
				value(event.target.closest(".autoComplete_result"));
				clearInput();
				clearResults();
				getSearchInput().setAttribute(
					"placeholder",
					`${event.target.closest(".autoComplete_result").id.length > maxLength ? event.target.closest(".autoComplete_result").id.slice(0, maxLength) +
					"..." : event.target.closest(".autoComplete_result").id}`
				);
			});
		});
	};
	const error = error => {
		document.querySelector("body").innerHTML = `
		<div class="autoComplete_error">
			<div class="autoComplete_message">${error}</div>
		</div>
	`;
	};
	const renderResults = {
		getSearchInput,
		addResultsToList,
		getSelection,
		clearInput,
		clearResults,
		error
	};

	class autoComplete {
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
			this.dataSrc = config.dataSrc;
			this.placeHolder = String(config.placeHolder) ? config.placeHolder : false;
			this.placeHolderLength = Number(config.placeHolderLength) ? config.placeHolderLength : Infinity;
			this.maxResults = Number(config.maxResults) ? config.maxResults : 10;
			this.highlight = typeof config.highlight === "boolean" ? config.highlight : true;
			this.dataAttribute = config.dataAttribute === Object ? {
				tag: config.dataAttribute.tag,
				value: config.dataAttribute.value
			} : { tag: "autocomplete", value: "" };
			this.onSelection =
				typeof config.onSelection === "function" ? config.onSelection : renderResults.error(
					"<strong>Error</strong>, <strong>onSelection</strong> value is not a <strong>Function</string>."
				);
			this.init();
		}
		search(query, record) {
			query = query.replace(/ /g, "").toLowerCase();
			let match = [];
			let searchPosition = 0;
			for (let number = 0; number < record.length; number++) {
				let recordChar = record[number];
				if (searchPosition < query.length && recordChar.toLowerCase() === query[searchPosition]) {
					if (this.highlight) {
						recordChar = "<span class=\"autoComplete_highlighted_result\">" + recordChar + "</span>";
						searchPosition++;
					} else {
						searchPosition++;
					}
				}
				match.push(recordChar);
			}
			if (searchPosition !== query.length) {
				return "";
			}
			return match.join("");
		}
		listMatchedResults() {
			return new Promise((res) => {
	      this.resList = [];
	      this.cleanResList = [];
	      let inputValue = renderResults.getSearchInput().value;
	      try {
	        this.getDataSrc().then((dataSrc) => {
	          dataSrc.filter(record => {
	            const match = this.search(inputValue, record);
	            if (match) {
	              this.resList.push(match);
	              this.cleanResList.push(record);
	            }
	          });
	          res(renderResults.addResultsToList(
	            this.resList.slice(0, this.maxResults),
	            this.cleanResList.slice(0, this.maxResults),
	            this.dataAttribute
	          ));
					});
	      } catch (error) {
	        renderResults.error(error);
	      }
			});
		}
		searchInputValidation(selector) {
			selector.addEventListener("keyup", async () => {
				if (selector.value.length > 0 && selector.value !== " ") {
					renderResults.clearResults();
					this.listMatchedResults().then(() => {
	          renderResults.getSelection(this.onSelection, this.placeHolderLength);
					});
				} else {
					renderResults.clearResults();
				}
			});
		}
		setPlaceHolder() {
			if (this.placeHolder) {
				renderResults.getSearchInput().setAttribute("placeholder", this.placeHolder);
			}
		}
		init() {
			try {
				if (this.isDataSrcValid(this.dataSrc)) {
					this.setPlaceHolder();
					this.searchInputValidation(renderResults.getSearchInput());
				}
			} catch (error) {
				console.log(error);
				renderResults.error(
					"<strong>error</strong>, autoComplete <strong>engine</strong> is not <strong>starting</strong>..."
				);
			}
		}
	}

	return autoComplete;

})));
