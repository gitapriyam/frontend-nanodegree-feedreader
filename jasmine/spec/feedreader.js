/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        /* Verify if the allFeeds are defined 
            and has a length greater than 0 */
        it('All Feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });


        /* Scope: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        /*  The following tests verify that all feeds have their
            URL defined and the URL is not empty
        */
        it('have URLs defined and those URLs not empty', function () {
            for (var index = 0; index < allFeeds.length; index++) {
                expect(allFeeds[index].url).toBeDefined();
                expect(allFeeds[index].url).not.toBe('');
            }
        });

        /* Scope: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        /*
            These tests verify existence of name attribute in each 
            element of allFeeds and it is not empty.
        */

        it('All Feeds have names defined and not empty', function () {
            for (var index = 0; index < allFeeds.length; index++) {
                expect(allFeeds[index].name).toBeDefined();
                expect(allFeeds[index].name).not.toBe('');
            }
        });
    });


    /* Scope: Write a new test suite named "The menu" */

    describe('The menu', function () {

        /* Scope: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        /*  This test verifies that the body tag has
            a class menu-hidden 
        */
        it('menu is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Scope: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu unhides/hides when clicked', function () {
            $('.menu-icon-link').trigger("click");
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('.menu-icon-link').trigger("click");
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* Scope: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* Scope: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // Performs the asynchronous loadFeed function before running the test
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        // This test checks to see if there is a .entry element within the .feed container
        it('at least a single .entry element within .feed container', function (done) {
            // Checks if the .feed element contains a .entry child element
            // by checking that the .entry element is not a length of zero
            expect($('.feed').has($('.entry')).length).not.toBe(0);
            done();
        });

    });
    /* Scope: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {

        /* Scope: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        /* This keeps track of the current index of the allFeeds */
        var currentIndex = 0;
        /*This represents the first .entry of the html content with every feed */
        var priorHtmlContent = '';

        /* This is executed prior to every test */
        beforeEach(function (done) {
            loadFeed(currentIndex, function () {
                done();
            });
        });


        /* This function test gets executed for allFeeds content */
        function performTest(done) {
            it('Current feed first .entry content is different from prior feed first .entry content', function (done) {
                expect($('.feed .entry').length).toBeGreaterThan(0);
                /* Verifies that current content is different from prior content */
                expect($('.entry').html()).not.toBe(priorHtmlContent);
                done();
            });
        }

        /* Iterate thru the allFeeds */
        for (var i = 0; i < allFeeds.length; i++) {
            performTest();
        }

        /* This executed after every test */
        afterEach(function (done) {
            currentIndex++;
            priorHtmlContent = $('.entry').html();
            done();
        });
    });
}());
