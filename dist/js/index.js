const grocery = [
	"The Pop Shoppe - Black Cherry",
	"Bread - Crumbs, Bulk",
	"Water - Green Tea Refresher",
	"Pork - Liver",
	"Pastry - Mini French Pastries",
	"Nantucket - Pomegranate Pear",
	"Island Oasis - Wildberry",
	"Squid - U 5",
	"Beer - Heinekin",
	"Pork Casing",
	"Wine - Mondavi Coastal Private",
	"Swiss Chard",
	"Snapple - Iced Tea Peach",
	"Aspic - Clear",
	"Wine - Ej Gallo Sonoma",
	"Beef - Kindney, Whole",
	"Cookie Choc",
	"Sauce - Mint",
	"Shrimp - 100 / 200 Cold Water",
	"Energy Drink Bawls",
	"Bread Foccacia Whole",
	"Extract - Raspberry",
	"Vanilla Beans",
	"Pur Value",
	"Oil - Coconut",
	"Salmon - Sockeye Raw",
	"Beef - Flank Steak",
	"Lettuce - Green Leaf",
	"Onions - Cippolini",
	"Wine - Montecillo Rioja Crianza",
	"Trueblue - Blueberry",
	"Coffee - Almond Amaretto",
	"Pork - Ground",
	"Mousse - Passion Fruit",
	"Cheese - Le Cru Du Clocher",
	"Nantucket Cranberry Juice",
	"Sausage - Blood Pudding",
	"Veal - Leg",
	"Chocolate - Liqueur Cups With Foil",
	"Island Oasis - Mango Daiquiri",
	"Bacardi Mojito",
	"Buttons",
	"Sproutsmustard Cress",
	"Wine - Sake",
	"Potatoes - Purple, Organic",
	"Wine - Remy Pannier Rose",
	"Chicken - Wieners",
	"Pickerel - Fillets",
	"Icecream - Dstk Super Cone",
	"Bacardi Limon",
	"Hersey Shakes",
	"Creme De Menth - White",
	"Wine - Redchard Merritt",
	"Trout Rainbow Whole",
	"Dried Cranberries",
	"Pork - Ham Hocks - Smoked",
	"Pepper - Julienne, Frozen",
	"Chocolate - Milk Coating",
	"Wine - Red, Wolf Blass, Yellow",
	"Onions Granulated",
	"Veal - Shank, Pieces",
	"Sole - Dover, Whole, Fresh",
	"Ice Cream - Chocolate",
	"Chocolate Bar - Coffee Crisp",
	"Wine - Magnotta, White",
	"Wine - Fino Tio Pepe Gonzalez",
	"Aspic - Light",
	"Longos - Chicken Cordon Bleu",
	"Brandy - Bar",
	"Squid Ink",
	"Lamb - Leg, Bone In",
	"Pepper - Red Bell",
	"English Muffin",
	"Tomatoes - Cherry, Yellow",
	"Hipnotiq Liquor",
	"Sole - Fillet",
	"Lemonade - Pineapple Passion",
	"Versatainer Nc - 888",
	"Soup - Base Broth Beef",
	"Cup - 3.5oz, Foam",
	"Mortadella",
	"Island Oasis - Raspberry",
	"Muffin Hinge Container 6",
	"Wine - Puligny Montrachet A.",
	"Hand Towel",
	"Doilies - 8, Paper",
	"Arctic Char - Fillets",
	"Juice - Orange, 341 Ml",
	"Tomatoes Tear Drop Yellow",
	"Pork - Bacon Cooked Slcd",
	"Wine - Magnotta - Belpaese",
	"Coffee Cup 16oz Foam",
	"Pepper - White, Ground",
	"Eggplant Oriental",
	"Chinese Foods - Thick Noodles",
	"Coffee - Decafenated",
	"Flour - So Mix Cake White",
	"Lumpfish Black",
	"Yogurt - French Vanilla",
	"Eel Fresh",
	"Wine - Vovray Sec Domaine Huet",
	"Extract - Vanilla,artificial",
	"Turnip - White, Organic",
	"Vermacelli - Sprinkles, Assorted",
	"Pears - Anjou",
	"Jam - Marmalade, Orange",
	"Duck - Legs",
	"Pork - Ground",
	"Rabbit - Frozen",
	"Ham - Proscuitto",
	"Longan",
	"Wine - Gato Negro Cabernet",
	"Cheese - Cambozola",
	"Cookies - Englishbay Wht",
	"Cactus Pads",
	"Bread - Malt",
	"Horseradish Root",
	"Brandy - Bar",
	"Oil - Canola",
	"Lettuce - Arugula",
	"Jameson Irish Whiskey",
	"Orange - Tangerine",
	"Wine - Red, Mouton Cadet",
	"Dill Weed - Dry",
	"Coffee Cup 8oz 5338cd",
	"Numi - Assorted Teas",
	"Table Cloth 62x114 White",
	"Pork - Backfat",
	"Flour - Pastry",
	"Beans - Fava Fresh",
	"Gatorade - Cool Blue Raspberry",
	"Orange - Tangerine",
	"Wine - White, Colubia Cresh",
	"Sugar - Cubes",
	"Lettuce - Curly Endive",
	"Broom Handle",
	"Butter Sweet",
	"Plate Foam Laminated 9in Blk",
	"Mushroom - Porcini Frozen",
	"Coconut - Shredded, Unsweet",
	"English Muffin",
	"Octopus - Baby, Cleaned",
	"Table Cloth 62x114 White",
	"Dried Apple",
	"Beer - Fruli",
	"Rabbit - Frozen",
	"Food Colouring - Green",
	"Appetizer - Lobster Phyllo Roll",
	"Beef - Bones, Marrow",
	"Beef - Ground, Extra Lean, Fresh",
	"Flour - Masa De Harina Mexican",
	"Soupfoamcont12oz 112con",
	"Cinnamon - Stick",
	"Soup - Cream Of Broccoli, Dry",
	"Fruit Mix - Light",
	"Beef - Top Sirloin",
	"Tarragon - Primerba, Paste",
	"Sweet Pea Sprouts",
	"Pur Value",
	"Rice - Wild",
	"Turkey - Whole, Fresh",
	"Chicken - Livers",
	"Coconut - Whole",
	"Carrots - Mini, Stem On",
	"Sprite - 355 Ml",
	"Rye Special Old",
	"Sobe - Orange Carrot",
	"Soup - Knorr, Chicken Noodle",
	"Chef Hat 25cm",
	"Lid - 0090 Clear",
	"Jam - Marmalade, Orange",
	"Longos - Greek Salad",
	"Water - Mineral, Natural",
	"Barramundi",
	"Dome Lid Clear P92008h",
	"Dooleys Toffee",
	"Mace Ground",
	"Orange Roughy 6/8 Oz",
	"Wine - Beringer Founders Estate",
	"Plums - Red",
	"Plastic Arrow Stir Stick",
	"Beef - Tenderloin",
	"Bar Nature Valley",
	"Wine - Manischewitz Concord",
	"Sauce - Vodka Blush",
	"Wine - Casillero Del Diablo",
	"Calypso - Black Cherry Lemonade",
	"Extract - Vanilla,artificial",
	"Carbonated Water - Blackberry",
	"Leeks - Large",
	"Food Colouring - Pink",
	"Stock - Chicken, White",
	"Pepper - White, Ground",
	"Ham - Cooked Italian",
	"Spice - Montreal Steak Spice",
	"Pastry - Apple Large",
	"Foam Cup 6 Oz",
	"Venison - Ground",
	"Straws - Cocktale",
	"Clams - Canned",
	"Monkfish - Fresh",
	"Pepper - Chilli Seeds Mild",
	"Cake Sheet Combo Party Pack",
	"Wine - Merlot Vina Carmen",
	"Longos - Chicken Curried",
	"Turkey - Breast, Smoked",
	"Slt - Individual Portions",
	"Seedlings - Mix, Organic",
	"Cookie Dough - Double",
	"Apple - Northern Spy",
	"Pants Custom Dry Clean",
	"Rum - Cream, Amarula",
	"Stock - Beef, White",
	"Grapes - Green",
	"Tart Shells - Savory, 3",
	"Foam Tray S2",
	"Calypso - Black Cherry Lemonade",
	"Energy Drink Bawls",
	"Pasta - Fettuccine, Dry",
	"Bread - Rosemary Focaccia",
	"Ginger - Crystalized",
	"Mcgillicuddy Vanilla Schnap",
	"Pasta - Ravioli",
	"Table Cloth 53x69 White",
	"Pepper - Paprika, Hungarian",
	"Energy Drink",
	"Creme De Cacao White",
	"Cookies - Fortune",
	"Crab - Dungeness, Whole",
	"Venison - Denver Leg Boneless",
	"Calypso - Strawberry Lemonade",
	"Cheese - Romano, Grated",
	"Bread Roll Foccacia",
	"Bowl 12 Oz - Showcase 92012",
	"Basil - Fresh",
	"Veal - Sweetbread",
	"Salmon - Atlantic, No Skin",
	"Sprouts - Onion",
	"Cardamon Ground",
	"Iced Tea Concentrate",
	"Sproutsmustard Cress",
	"Muffin - Zero Transfat",
	"Bread - Mini Hamburger Bun",
	"Radish",
	"Tuna - Salad Premix",
	"Maple Syrup",
	"Peach - Halves",
	"Cornflakes",
	"Wine - Guy Sage Touraine",
	"Doilies - 12, Paper",
	"Zucchini - Yellow",
	"Flax Seed",
	"V8 Pet",
	"Broom - Angled",
	"Wine - Red, Cooking",
	"Nacho Chips",
	"Cocoa Powder - Natural",
	"Black Currants",
	"Oil - Shortening,liqud, Fry",
	"Octopus",
	"Mackerel Whole Fresh",
	"Daves Island Stinger",
	"Eel Fresh",
	"Ice Cream - Fudge Bars",
	"Lamb Leg - Bone - In Nz",
	"Wine - White, French Cross",
	"Beef - Top Butt Aaa",
	"Cake - Night And Day Choclate",
	"Bols Melon Liqueur",
	"Tumeric",
	"Seedlings - Buckwheat, Organic",
	"Macaroons - Homestyle Two Bit",
	"Lobster - Tail 6 Oz",
	"Mustard - Seed",
	"Browning Caramel Glace",
	"Beer - Sleeman Fine Porter",
	"Brandy - Bar",
	"Pork - Belly Fresh",
	"Rum - Light, Captain Morgan",
	"Dried Peach",
	"Chips Potato All Dressed - 43g",
	"Crab - Imitation Flakes",
	"Puree - Mango",
	"Eggplant - Regular",
	"Glass - Juice Clear 5oz 55005",
	"Pastry - Cheese Baked Scones",
	"Veal - Chops, Split, Frenched",
	"Crab - Imitation Flakes",
	"Veal - Brisket, Provimi,bnls",
	"Pork - Loin, Bone - In",
	"Nutmeg - Ground",
	"Seaweed Green Sheets",
	"Toothpick Frilled",
	"Liqueur - Melon",
	"Wine - Baron De Rothschild",
	"Wine - Domaine Boyar Royal",
	"Scallops - 20/30",
	"Latex Rubber Gloves Size 9",
	"Glass Clear 7 Oz Xl",
	"Juice - Apple, 1.36l",
	"Rolled Oats",
	"Fish - Atlantic Salmon, Cold",
	"Lumpfish Black",
	"Coffee - Dark Roast",
	"Peppercorns - Green",
	"Canadian Emmenthal",
	"Crab - Imitation Flakes",
	"Coriander - Ground",
	"Pastry - Chocolate Chip Muffin",
	"Nectarines",
	"Pastry - Carrot Muffin - Mini",
	"Pasta - Tortellini, Fresh",
	"Oil - Hazelnut",
	"Wasabi Paste",
	"Filling - Mince Meat",
	"Table Cloth 81x81 White",
	"Spice - Pepper Portions",
	"Appetizer - Seafood Assortment",
	"Cod - Fillets",
	"Banana - Green",
	"Cleaner - Lime Away",
	"Wine - Chateau Bonnet",
	"Truffle Cups - Red",
	"Remy Red",
	"Shrimp - Black Tiger 26/30",
	"Cookies - Englishbay Wht",
	"Cake Slab",
	"Garbage Bags - Black",
	"Banana - Green",
	"Tomatoes - Diced, Canned",
	"Pasta - Lasagna Noodle, Frozen",
	"Corn Meal",
	"Lamb Rack - Ontario",
	"Cheese - Havarti, Roasted Garlic",
	"Syrup - Monin, Swiss Choclate",
	"Potatoes - Mini White 3 Oz",
	"Water - Mineral, Carbonated",
	"Juice - Tomato, 10 Oz",
	"Spice - Chili Powder Mexican",
	"Urban Zen Drinks",
	"Wine - Semi Dry Riesling Vineland",
	"Wine - Tio Pepe Sherry Fino",
	"Chocolate Bar - Smarties",
	"Beef - Tenderloin",
	"Beer - Sleeman Fine Porter",
	"Wine - Montecillo Rioja Crianza",
	"Wine - Bourgogne 2002, La",
	"Prunes - Pitted",
	"Cut Wakame - Hanawakaba",
	"Wine - Chianti Classico Riserva",
	"Beef - Sushi Flat Iron Steak",
	"Onion Powder",
	"Buffalo - Striploin",
	"Wiberg Super Cure",
	"Milk - 2%",
	"Bread - Roll, Soft White Round",
	"Pork - Ham, Virginia",
	"Pie Filling - Cherry",
	"Tea - Apple Green Tea",
	"Sweet Pea Sprouts",
	"Bread - Bistro White",
	"Bagel - Plain",
	"Flour - So Mix Cake White",
	"Peppercorns - Green",
	"Wine - Red, Concha Y Toro",
	"Lamb - Shoulder",
	"Cake Circle, Foil, Scallop",
	"Rabbit - Frozen",
	"Pork - European Side Bacon",
	"Juice - Grapefruit, 341 Ml",
	"Sugar - Monocystal / Rock",
	"Cloves - Ground",
	"Horseradish Root",
	"Pie Shells 10",
	"Crab - Back Fin Meat, Canned",
	"Cheese - Sheep Milk",
	"Oranges - Navel, 72",
	"Pants Custom Dry Clean",
	"Cheese - Brie, Cups 125g",
	"Juice - Tomato, 10 Oz",
	"Eel - Smoked",
	"Orange - Canned, Mandarin",
	"Lamb Tenderloin Nz Fr",
	"Tea - Grapefruit Green Tea",
	"Coriander - Seed",
	"Chocolate - Unsweetened",
	"Guinea Fowl",
	"Mangoes",
	"Cheese - Cheddarsliced",
	"Pasta - Lasagna, Dry",
	"Soup - Knorr, Classic Can. Chili",
	"Ham - Proscuitto",
	"Beef Cheek Fresh",
	"Milk - 1%",
	"Cheese - Goat With Herbs",
	"Water - Spring 1.5lit",
	"Pastry - Banana Tea Loaf",
	"Worcestershire Sauce",
	"Irish Cream - Butterscotch",
	"Rice - Basmati",
	"Lobster - Tail 6 Oz",
	"Cheese - Brie",
	"Wine - Sogrape Mateus Rose",
	"Fudge - Cream Fudge",
	"Wasabi Paste",
	"Carbonated Water - Peach",
	"Foil - 4oz Custard Cup",
	"Lettuce - Mini Greens, Whole",
	"Butter - Unsalted",
	"Teriyaki Sauce",
	"Cranberries - Fresh",
	"Longos - Cheese Tortellini",
	"Basil - Seedlings Cookstown",
	"Pepsi, 355 Ml",
	"Wine - Pinot Noir Mondavi Coastal",
	"Longos - Chicken Cordon Bleu",
	"Coffee Cup 16oz Foam",
	"Soup - Tomato Mush. Florentine",
	"Muffin - Mix - Mango Sour Cherry",
	"Beer - Pilsner Urquell",
	"Flower - Commercial Bronze",
	"Remy Red",
	"Dc - Sakura Fu",
	"Bagel - Everything",
	"Compound - Rum",
	"The Pop Shoppe - Root Beer",
	"Muffin Orange Individual",
	"Yeast Dry - Fermipan",
	"Crackers - Water",
	"Tea Leaves - Oolong",
	"Flour - Whole Wheat",
	"Bread - Focaccia Quarter",
	"Compound - Mocha",
	"Lettuce - Lolla Rosa",
	"Lettuce - Mini Greens, Whole",
	"The Pop Shoppe - Cream Soda",
	"Milk - 1%",
	"Wine - Magnotta - Belpaese",
	"Tuna - Sushi Grade",
	"Cake - Mini Potato Pancake",
	"Pepper - Red Bell",
	"Kellogs Raisan Bran Bars",
	"Sparkling Wine - Rose, Freixenet",
	"Coffee - Almond Amaretto",
	"Chilli Paste, Hot Sambal Oelek",
	"Wine - Jackson Triggs Okonagan",
	"Shopper Bag - S - 4",
	"Table Cloth 62x114 Colour",
	"Pastry - Butterscotch Baked",
	"Lamb - Shoulder",
	"Creme De Menth - White",
	"Juice - V8 Splash",
	"Cookies - Englishbay Wht",
	"Apple - Fuji",
	"Beef - Eye Of Round",
	"Doilies - 7, Paper",
	"Squash - Sunburst",
	"Table Cloth 62x120 Colour",
	"Beef Wellington",
	"Wine - George Duboeuf Rose",
	"Nut - Almond, Blanched, Whole",
	"Mustard - Individual Pkg",
	"Tuna - Salad Premix",
	"Soup - Canadian Pea, Dry Mix",
	"Beef - Rib Eye Aaa",
	"Oil - Pumpkinseed",
	"Scallops 60/80 Iqf",
	"Bar Mix - Pina Colada, 355 Ml",
	"Onion Powder",
	"Chocolate - Semi Sweet, Calets",
	"Ham - Procutinni",
	"Cheese - Cheddar, Old White",
	"Chicken - Whole Roasting",
	"Bread - Italian Sesame Poly",
	"Sugar - Icing",
	"Salt - Kosher",
	"Sunflower Seed Raw",
	"Pears - Bosc",
	"Cheese - Roquefort Pappillon",
	"Jack Daniels",
	"Beans - Fava, Canned",
	"Wine - Red, Cabernet Sauvignon",
	"Bread - Rye",
	"Wine - White, Riesling, Semi - Dry",
	"Lamb - Shoulder",
	"Sauce - Cranberry",
	"Truffle - Whole Black Peeled",
	"Bacardi Limon",
	"Milk 2% 500 Ml",
	"Tendrils - Baby Pea, Organic",
	"Glaze - Clear",
	"Veal - Loin",
	"Cheese - Valancey",
	"Food Colouring - Green",
	"Brocolinni - Gaylan, Chinese",
	"Milk - Chocolate 250 Ml",
	"Brocolinni - Gaylan, Chinese",
	"The Pop Shoppe - Lime Rickey",
	"Bread - Raisin Walnut Pull",
	"Squid - U - 10 Thailand",
	"Shortbread - Cookie Crumbs",
	"Pork - Bacon Cooked Slcd",
	"Crackers Cheez It",
	"Wine - Black Tower Qr",
	"Schnappes Peppermint - Walker",
	"Soup Bowl Clear 8oz92008",
	"Schnappes - Peach, Walkers",
	"Cocoa Powder - Natural",
	"Rum - Light, Captain Morgan",
	"Tart Shells - Savory, 3",
	"Wine - Kwv Chenin Blanc South",
	"Cake Circle, Paprus",
	"Beef Striploin Aaa",
	"Chips - Doritos",
	"Glaze - Apricot",
	"Wine - Magnotta - Red, Baco",
	"Petit Baguette",
	"Wine - Red, Cabernet Sauvignon",
	"Chocolate - Milk, Callets",
	"Pork Casing",
	"Seedlings - Buckwheat, Organic",
	"Chickensplit Half",
	"Lettuce - Frisee",
	"Ecolab - Mikroklene 4/4 L",
	"Flour - Strong",
	"Cognac - Courvaisier",
	"Sage Ground Wiberg",
	"Cheese - Swiss Sliced",
	"Onions - Dried, Chopped",
	"Oil - Truffle, Black",
	"Fond - Chocolate",
	"Mustard - Seed",
	"Sprouts - Brussel",
	"Oregano - Fresh",
	"Nantucket - 518ml",
	"Icecream - Dstk Strw Chseck",
	"Wine - Barolo Fontanafredda",
	"Pomegranates",
	"Strawberries",
	"Instant Coffee",
	"Radish",
	"Oil - Sunflower",
	"Cakes Assorted",
	"Lamb Leg - Bone - In Nz",
	"Longos - Lasagna Veg",
	"Chips - Doritos",
	"Olives - Green, Pitted",
	"Cheese - Bocconcini",
	"Curry Powder",
	"Daves Island Stinger",
	"Lamb Shoulder Boneless Nz",
	"Momiji Oroshi Chili Sauce",
	"Tea Peppermint",
	"Everfresh Products",
	"Beef - Cooked, Corned",
	"Lid Coffee Cup 8oz Blk",
	"Lobster - Tail 6 Oz",
	"Sauce - Salsa",
	"Lettuce - Lolla Rosa",
	"Rice - Wild",
	"Roe - Lump Fish, Red",
	"Sage Derby",
	"Soup - Campbells - Tomato",
	"Latex Rubber Gloves Size 9",
	"Flower - Commercial Bronze",
	"Seaweed Green Sheets",
	"Wine - Red Oakridge Merlot",
	"Gingerale - Diet - Schweppes",
	"Potatoes - Yukon Gold, 80 Ct",
	"Coffee Caramel Biscotti",
	"Sauce - Black Current, Dry Mix",
	"Apple - Royal Gala",
	"Muffin - Banana Nut Individual",
	"Wine - Beaujolais Villages",
	"Blueberries",
	"Bread - Rolls, Rye",
	"Chinese Foods - Plain Fried Rice",
	"Turnip - White",
	"Pork - Butt, Boneless",
	"Vinegar - Champagne",
	"Onions - Red",
	"Chicken - Wieners",
	"Puree - Mocha",
	"Pasta - Bauletti, Chicken White",
	"Peach - Halves",
	"Cheese - Cheddar, Mild",
	"Wine - Harrow Estates, Vidal",
	"Piping Jelly - All Colours",
	"Chicken - Leg, Boneless",
	"Fish - Halibut, Cold Smoked",
	"Wine - Riesling Dr. Pauly",
	"Ostrich - Fan Fillet",
	"Currants",
	"Ice Cream Bar - Oreo Cone",
	"Venison - Denver Leg Boneless",
	"Ice Cream - Vanilla",
	"Lettuce - California Mix",
	"Crackers - Soda / Saltins",
	"Wine - Red, Lurton Merlot De",
	"Calypso - Pineapple Passion",
	"Pate - Liver",
	"Juice - Grapefruit, 341 Ml",
	"Cleaner - Pine Sol",
	"Tart - Lemon",
	"Sping Loaded Cup Dispenser",
	"Pasta - Fettuccine, Dry",
	"Pie Filling - Pumpkin",
	"Tomatoes Tear Drop Yellow",
	"Wine - Fino Tio Pepe Gonzalez",
	"Buffalo - Striploin",
	"Pork - Side Ribs",
	"Buffalo - Tenderloin",
	"Plate Foam Laminated 9in Blk",
	"Table Cloth 54x54 White",
	"Beer - Heinekin",
	"Wine - Red, Mouton Cadet",
	"Shrimp - 150 - 250",
	"Oil - Shortening,liqud, Fry",
	"Quail - Whole, Bone - In",
	"Beef - Tenderlion, Center Cut",
	"Vinegar - Champagne",
	"Container - Clear 32 Oz",
	"Pie Filling - Pumpkin",
	"Napkin - Cocktail,beige 2 - Ply",
	"Tea - Herbal I Love Lemon",
	"Flour - Cake",
	"Cookie Dough - Double",
	"Chocolate - Compound Coating",
	"Beef - Texas Style Burger",
	"Bread - Frozen Basket Variety",
	"Lobster - Cooked",
	"Pork - Chop, Frenched",
	"Wine - Red, Black Opal Shiraz",
	"Flower - Daisies",
	"Muffin Chocolate Individual Wrap",
	"Beer - Molson Excel",
	"Wine - Red, Wolf Blass, Yellow",
	"Veal Inside - Provimi",
	"Ginger - Crystalized",
	"Syrup - Pancake",
	"Potatoes - Mini White 3 Oz",
	"Lemonade - Mandarin, 591 Ml",
	"Flavouring - Orange",
	"Cheese - Augre Des Champs",
	"Potatoes - Instant, Mashed",
	"Raisin - Dark",
	"Cheese - Roquefort Pappillon",
	"Pastry - Chocolate Chip Muffin",
	"Turnip - White",
	"Milk Powder",
	"Truffle Cups - Red",
	"Bandage - Fexible 1x3",
	"Jicama",
	"Squid - Tubes / Tenticles 10/20",
	"Remy Red",
	"Extract - Lemon",
	"Ice Cream - Vanilla",
	"Sour Puss - Tangerine",
	"Soup Bowl Clear 8oz92008",
	"Beer - Mill St Organic",
	"Ginger - Ground",
	"Leeks - Large",
	"Bread - Roll, Whole Wheat",
	"Mace Ground",
	"Oregano - Dry, Rubbed",
	"Cheese - Parmesan Cubes",
	"Beef Cheek Fresh",
	"Soup V8 Roasted Red Pepper",
	"Pear - Asian",
	"Parsley - Dried",
	"Lettuce - Romaine, Heart",
	"Wine - Red, Mosaic Zweigelt",
	"Lid Tray - 16in Dome",
	"Rappini - Andy Boy",
	"Fruit Salad Deluxe",
	"Sprouts - Pea",
	"Cheese - Brie,danish",
	"Flour - Whole Wheat",
	"Beef - Cow Feet Split",
	"Kaffir Lime Leaves",
	"Appetizer - Chicken Satay",
	"Onions - Red Pearl",
	"Sponge Cake Mix - Vanilla",
	"Flour - So Mix Cake White",
	"Hersey Shakes",
	"Cinnamon Buns Sticky",
	"Crab - Claws, 26 - 30",
	"Pasta - Lasagna, Dry",
	"Shrimp, Dried, Small / Lb",
	"Yogurt - Peach, 175 Gr",
	"Vermouth - Sweet, Cinzano",
	"Wine - Niagara,vqa Reisling",
	"Chocolate Bar - Coffee Crisp",
	"Ezy Change Mophandle",
	"Nantucket Orange Juice",
	"Beer - Blue Light",
	"Grand Marnier",
	"Coffee - Colombian, Portioned",
	"Mix - Cocktail Strawberry Daiquiri",
	"Rice - Basmati",
	"Cheese - Goat With Herbs",
	"Bread - Sour Sticks With Onion",
	"Leeks - Baby, White",
	"Tray - Foam, Square 4 - S",
	"Bagel - 12 Grain Preslice",
	"Wine - Chateau Bonnet",
	"Eggplant Oriental",
	"Appetizer - Tarragon Chicken",
	"Bread Base - Goodhearth",
	"Capon - Whole",
	"Garbage Bags - Clear",
	"Onions - White",
	"Hersey Shakes",
	"Sugar - Icing",
	"Chick Peas - Dried",
	"Beef - Kindney, Whole",
	"Bread - Burger",
	"Wine - Jackson Triggs Okonagan",
	"Wine - Alsace Riesling Reserve",
	"Chicken - Breast, 5 - 7 Oz",
	"Cocoa Powder - Dutched",
	"Wine - Prosecco Valdobienne",
	"Tamarind Paste",
	"Table Cloth 54x54 Colour",
	"Wine - Placido Pinot Grigo",
	"Wine - Montecillo Rioja Crianza",
	"Cognac - Courvaisier",
	"Browning Caramel Glace",
	"Club Soda - Schweppes, 355 Ml",
	"Containter - 3oz Microwave Rect.",
	"Soda Water - Club Soda, 355 Ml",
	"Soup Campbells Mexicali Tortilla",
	"Nantucket Orange Juice",
	"Pomello",
	"Fiddlehead - Frozen",
	"Nantucket Apple Juice",
	"Flavouring - Rum",
	"Curry Powder",
	"Pastry - Apple Muffins - Mini",
	"Rice Paper",
	"Mushroom - Lg - Cello",
	"Pork - Bacon, Sliced",
	"Wine - Vineland Estate Semi - Dry",
	"Rum - Dark, Bacardi, Black",
	"Cheese - Cheddar, Old White",
	"Puff Pastry - Sheets",
	"Cheese - St. Paulin",
	"Beer - Camerons Cream Ale",
	"Sausage - Meat",
	"Onions - Cippolini",
	"Oil - Margarine",
	"Shrimp - Black Tiger 13/15",
	"Mace",
	"Tea - Orange Pekoe",
	"Clams - Littleneck, Whole",
	"Salsify, Organic",
	"Wine - White, Concha Y Toro",
	"Chicken - Thigh, Bone In",
	"Potatoes - Instant, Mashed",
	"Ham - Cooked Italian",
	"Wine - Magnotta - Cab Franc",
	"Beef - Bresaola",
	"Godiva White Chocolate",
	"Cheese - Swiss Sliced",
	"Spice - Greek 1 Step",
	"Snapple Lemon Tea",
	"Muffin Hinge 117n",
	"Lobster - Baby, Boiled",
	"Nut - Walnut, Chopped",
	"Cakes Assorted",
	"Soup - Knorr, Veg / Beef",
	"Monkfish - Fresh",
	"Pasta - Agnolotti - Butternut",
	"Wild Boar - Tenderloin",
	"Water - Tonic",
	"Kellogs Special K Cereal",
	"Bread Country Roll",
	"Tarragon - Primerba, Paste",
	"Table Cloth 54x54 Colour",
	"Cup - Paper 10oz 92959",
	"Bandage - Finger Cots",
	"Veal - Inside Round / Top, Lean",
	"Vector Energy Bar",
	"Coffee - Colombian, Portioned",
	"Sole - Dover, Whole, Fresh",
	"Yogurt - Blueberry, 175 Gr",
	"Sauce - Bernaise, Mix",
	"Lamb - Rack",
	"Bread Crumbs - Japanese Style",
	"Guinea Fowl",
	"Broom - Corn",
	"Chicken - Whole",
	"Bacon Strip Precooked",
	"Wine - Ej Gallo Sierra Valley",
	"Bacardi Breezer - Strawberry",
	"Soup - Cream Of Broccoli",
	"Pastry - Mini French Pastries",
	"Pastry - Lemon Danish - Mini",
	"Lamb - Shoulder, Boneless",
	"Shrimp, Dried, Small / Lb",
	"Seedlings - Buckwheat, Organic",
	"Flavouring - Orange",
	"Coffee - Flavoured",
	"Cleaner - Bleach",
	"Sparkling Wine - Rose, Freixenet",
	"Bread - Italian Roll With Herbs",
	"Tuna - Loin",
	"Ham - Black Forest",
	"Wine - Vovray Sec Domaine Huet",
	"Cheese - Havarti, Salsa",
	"Thyme - Dried",
	"Eggs - Extra Large",
	"Star Fruit",
	"Beer - Upper Canada Light",
	"Nutmeg - Ground",
	"Radish - Pickled",
	"Turkey - Whole, Fresh",
	"Wine - Saint - Bris 2002, Sauv",
	"Dc Hikiage Hira Huba",
	"Fond - Neutral",
	"Thyme - Dried",
	"Wine - Fino Tio Pepe Gonzalez",
	"Arizona - Plum Green Tea",
	"Canadian Emmenthal",
	"Plums - Red",
	"Bag Clear 10 Lb",
	"Walkers Special Old Whiskey",
	"Quinoa",
	"Tea - Darjeeling, Azzura",
	"Skirt - 24 Foot",
	"Blouse / Shirt / Sweater",
	"Oil - Safflower",
	"Food Colouring - Red",
	"Ecolab - Hobart Washarm End Cap",
	"Wine - Magnotta - Bel Paese White",
	"Nutmeg - Ground",
	"Juice - Apple, 341 Ml",
	"Pan Grease",
	"Sobe - Lizard Fuel",
	"Turkey - Breast, Bone - In",
	"Soup - French Onion, Dry",
	"Napkin - Beverage 1 Ply",
	"Quail - Eggs, Fresh",
	"Crab - Claws, Snow 16 - 24",
	"Wine - Casillero Deldiablo",
	"Sweet Pea Sprouts",
	"Potatoes - Mini Red",
	"Limes",
	"Cherries - Maraschino,jar",
	"Wine - Red, Mouton Cadet",
	"Beans - Butter Lrg Lima",
	"Flour - Cake",
	"Clams - Canned",
	"Parsnip",
	"Brandy - Orange, Mc Guiness",
	"Mushroom - Oyster, Fresh",
	"Bagel - Whole White Sesame",
	"Kellogs All Bran Bars",
	"Nut - Peanut, Roasted",
	"Flour - Teff",
	"Truffle Paste",
	"Monkfish - Fresh",
	"Ham - Procutinni",
	"Ginger - Ground",
	"C - Plus, Orange",
	"Tarragon - Fresh",
	"Beer - Sleemans Cream Ale",
	"Iced Tea Concentrate",
	"Beans - Navy, Dry",
	"Arctic Char - Fresh, Whole",
	"Appetizer - Smoked Salmon / Dill",
	"Wine - Spumante Bambino White",
	"Beer - Upper Canada Lager",
	"Food Colouring - Orange",
	"Radish - Black, Winter, Organic",
	"Jam - Marmalade, Orange",
	"Flour - Fast / Rapid",
	"True - Vue Containers",
	"Sugar - Brown",
	"Olives - Nicoise",
	"Chicken - Leg, Fresh",
	"Veal - Inside",
	"Fennel - Seeds",
	"Peas Snow",
	"Mushroom - Porcini, Dry",
	"Cumin - Whole",
	"Cheese - Brie",
	"Beef - Cow Feet Split",
	"Soup - Campbells, Cream Of",
	"Shrimp - 31/40",
	"Flavouring Vanilla Artificial",
	"Soap - Pine Sol Floor Cleaner",
	"Mustard - Dijon",
	"Yoplait - Strawbrasp Peac",
	"Jam - Blackberry, 20 Ml Jar",
	"Beer - Blue Light",
	"Asparagus - White, Fresh",
	"Lid Coffee Cup 8oz Blk",
	"Soup - Campbells Tomato Ravioli",
	"Asparagus - Green, Fresh",
	"Soup - Knorr, Ministrone",
	"Beef - Ground Medium",
	"Lid - 3oz Med Rec",
	"Lettuce - Boston Bib - Organic",
	"Wine - Sauvignon Blanc Oyster",
	"Sun - Dried Tomatoes",
	"Puree - Raspberry",
	"Veal - Brisket, Provimi,bnls",
	"Barramundi",
	"Croissants Thaw And Serve",
	"Gatorade - Lemon Lime",
	"Wine - White, Riesling, Henry Of",
	"Beef - Ground Lean Fresh",
	"Beans - Butter Lrg Lima",
	"Celery",
	"Bread - Wheat Baguette",
	"Wine - Periguita Fonseca",
	"Dill Weed - Fresh",
	"Rambutan",
	"Emulsifier",
	"Juice - Cranberry, 341 Ml",
	"Beef - Rib Eye Aaa",
	"Wine - Placido Pinot Grigo",
	"Chicken - Bones",
	"Lid Coffeecup 12oz D9542b",
	"Cups 10oz Trans",
	"Apron",
	"Prunes - Pitted",
	"Salmon Steak - Cohoe 6 Oz",
	"Honey - Liquid",
	"Chambord Royal",
	"Wine - White, Pelee Island",
	"Sprouts Dikon",
	"Sauce - Alfredo",
	"Chicken - Wieners",
	"Ice Cream - Turtles Stick Bar",
	"Quail - Eggs, Fresh",
	"Chocolate Eclairs",
	"Beef - Ground Lean Fresh",
	"Beef - Diced",
	"Beef Cheek Fresh",
	"Bay Leaf Ground",
	"Truffle Paste",
	"Pastry - Key Limepoppy Seed Tea",
	"Wine - Prem Select Charddonany",
	"Juice - Apple, 341 Ml",
	"Nut - Pistachio, Shelled",
	"Cheese - Perron Cheddar",
	"Poppy Seed",
	"Noodles - Steamed Chow Mein",
	"Mustard - Seed",
	"Nut - Pumpkin Seeds",
	"Vodka - Lemon, Absolut",
	"Wine - Red, Concha Y Toro",
	"Tofu - Firm",
	"Shrimp - 150 - 250",
	"Lettuce - Romaine, Heart",
	"Apple - Granny Smith",
	"Soup - Campbells - Chicken Noodle",
	"Oil - Peanut",
	"Container - Foam Dixie 12 Oz",
	"Bar - Sweet And Salty Chocolate",
	"Phyllo Dough",
	"Beer - Guiness",
	"Lamb - Pieces, Diced",
	"Beer - Paulaner Hefeweisse",
	"Sobe - Liz Blizz",
	"Lemonade - Natural, 591 Ml",
	"Squash - Pepper",
	"Mushroom - Shitake, Fresh",
	"Versatainer Nc - 8288",
	"Foil - 4oz Custard Cup",
	"Pepper - Red Chili",
	"Island Oasis - Wildberry",
	"Flavouring - Orange",
	"Chips Potato All Dressed - 43g",
	"Cornflakes",
	"Turkey - Breast, Double",
	"Grapes - Black",
	"Mortadella",
	"Beef Ground Medium",
	"Cheese - Parmigiano Reggiano",
	"Bread - Focaccia Quarter",
	"Mustard Prepared",
	"Sauce - Hp",
	"Yucca",
	"Veal - Inside",
	"Pasta - Orecchiette",
	"Peppercorns - Pink",
	"Napkin White",
	"Yoplait - Strawbrasp Peac",
	"Hagen Daza - Dk Choocolate",
	"French Pastries",
	"Pasta - Canelloni",
	"Sole - Iqf",
	"Island Oasis - Raspberry",
	"Crackers - Trio",
	"Pork - Hock And Feet Attached",
	"Container - Clear 16 Oz",
	"Wine - Dubouef Macon - Villages"
];

// The app instance creator
new autoComplete({
  dataSrc: (input) => {


    return new Promise((res) => {
      setTimeout(() => res(grocery.filter((el) => el.includes(input))), 1000)
    })
	},
	// dataSrc: grocery,
	placeHolder: "Try me...",
	placeHolderLength: 26,
	maxResults: 10,
	highlight: true,
	dataAttribute: {
		tag: "set",
		value: "value"
	},
	onSelection: value => {
		document.querySelector(".selection").innerHTML = value.id;
	}
});
