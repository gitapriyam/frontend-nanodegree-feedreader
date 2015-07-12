#The scope of this assignment
=============================

###The feedreader.js contains the following tests written in Jasmine:
-----------------------------------------------------------------

	#####allFeed Object
	--------------
	1) Verify allFeeds object is defined and it's length is greater than 0.
		**Result : Passed**
    2) Loop through each feed in the allFeeds object and ensure it has a 
		URL defined & URL is not empty.
		Result : Passed
    3) Loop through each feed in the allFeeds object and ensure it has a name 
		defined and that the name is not empty.
		Result: Passed
    
	menu Object
	-----------
	4) Verify  the menu element is hidden by default. 
		Result: Passed
	5) Change visibility when the menu icon is clicked. 
		Menu displays when clicked and hides when clicked again.
		Result: Passed
	
	loadFeed asynchronous function 
	------------------------------
	6)  Ensures that when this function is called, it completes its entrusted work.
		Jasmine beforeEach, afterEach & done() features are appropriately utilized. 
		Verify that at least a single .entry element within the .feed container. 
		Result : Passed
	7) .feed content is loaded by the loadFeed function actually changes for each call.
		Jasmine beforeEach, afterEach & done() features are appropriately utilized.
		Verify that the current .feed html content is differnt from prior .feed html content
		Result : Passed

