/******************************************************************************

This section is the default code provided by Udacity. No edits made!

******************************************************************************/

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

         it('are defined', function() {
             expect(allFeeds).toBeDefined();
             expect(allFeeds.length).not.toBe(0);
         });

/******************************************************************************

!!!.Start of code.!!!

1.  We'll first write a test that loops through each feed
    in the allFeeds object and makes sure it has a URL defined
    and that the URL is not empty.

2.  We'll then proceed to write a test that loops through each feed
    in the allFeeds object and makes sure that it has a name defined
    and that the name is not empty.

******************************************************************************/

        //  Our second spec under the 'RSS Feeds' suite is defined here.
        //    3. The ForEach method is used to loop over the allFeeds entities
        //       defined in app.js.
        //
        //    4. The first expectations declared below rely upon the counter
        //       variable to reference the correct array entity during loops.
        //       It is incremented by 1 after each loop at the very bottom.

        it('have defined URLs', function() {
            //let url = '';
            let counter = 0;

            allFeeds.forEach(function() {
                //url = allFeeds[counter].url;
                //console.log('The URL is ' + url);
                expect(allFeeds[counter].url).toBeDefined();
                expect(allFeeds[counter].url.length).not.toBe(0);
                counter += 1;
            });
        });

        //  The third spec under the 'RSS Feeds' suite is defined here.
        //    5. It's virtually identical to the spec above, but calls
        //       the 'name' property of the allFeeds object instead of the URL

        it('have defined names', function() {
            //let name = '';
            let counter = 0;

            allFeeds.forEach(function() {
                //name = allFeeds[counter].name;
                //console.log('The name is ' + name);
                expect(allFeeds[counter].name).toBeDefined();
                expect(allFeeds[counter].name.length).not.toBe(0);
                counter += 1;
            });
        });
    });

/******************************************************************************

    6.  We'll now write a test that ensures the menu element is
        hidden by default.

    7.  We'll then write a test that ensures that the menu changes
        visibility when the menu icon is clicked. This test
        will have two expectations: does the menu display when
        clicked and does it hide when clicked again.

******************************************************************************/

    // 8. 'describe' instantiates a new suite which we'll call 'The menu'.
    //     We're going to use querySelectors to identify the icon that
    //     shows and hides the menu (which was found by checking app.js).
    // 9.  The .click() method will simulate the mouse clicking on the menu icon
    //     ass opposed to using eventListeners (since this is automated).

    describe('The menu', function() {

        const body = document.querySelector('body');
        const menu = document.querySelector('.menu-icon-link');

        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        it('opens when clicked once', function() {
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
        });

        it('closes when clicked twice', function() {
            menu.click();
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

/******************************************************************************

        10.  We'll now write a test suite called 'Initial Entries'

        11.  And proceed to write a test that ensures that when the loadFeed
             function is called and completes its work, there is at least
             a single .entry element within the .feed container.
             Since loadFeed() is asynchronous, this test will require
             the use of Jasmine's beforeEach and asynchronous done() function.

******************************************************************************/


    // Since this code is asynchronous, we'll leverage beforeEach and the
    // 'done' callback to ensure the code executes fully before moving on.

    describe('Initial Entries', function() {

        const feed = document.querySelector('.feed');
        let entryList = feed.children;
        const entry = [];

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('are loaded', function() {
            for (i = 0; i < entryList.length; i++) {
                let identifyEntry = entryList[i].children;
                //verify that entries are being detected...
                //console.log(identifyEntry[0]);
                entry.push(identifyEntry);
            };
            expect(entry.length).toBeGreaterThan(0);
        });
    });

/******************************************************************************

        12.  Finally, we'll write a new test suite named "New Feed Selection"
             and write a test that ensures that when a new feed is loaded
             by the loadFeed function that the content actually changes.

******************************************************************************/

    // this suite is a lot more verbose than the ones preceeding it, so
    // each section will be commented out in turn:


    // This section defines the suite and declares block-scope variables.
    // const feed: holds the querySelector for the .feed class
    // feedOne/Two: are placeholder arrays that will come in handy later

    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        let feedOne = [];
        let feedTwo = [];

        // feedOneArray is called alongside loadFeed in the beforeEach function.
        // Its purpose is to store the contents of the first feed that is loaded
        // into an array so that it can be compared to the second feed later.

        function feedOneArray() {
            Array.from(feed.children).forEach(function(id) {
                feedOne.push(id.innerText);
                //console.log('First array: ' + feedOne);
            });
        };

        // As above, except this function is called slightly later to prevent
        // an async timeout in the beforeEach function.

        function feedTwoArray() {
            Array.from(feed.children).forEach(function(id) {
                feedTwo.push(id.innerText);
                //console.log('Second array: ' + feedTwo);
            });
        };

        // This section simulates asynchronous behaviour. It has a timeout
        // function and leverages the 'done' callback to ensure that then
        // interpreter doesn't go off on a tangent.

        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0, feedOneArray);
                loadFeed(1, done);
            }, 1000);
        });

        // feedOneArray is called from BeforeEach, while feedTwoArray is called
        // from within the spec. Again, this was done to avoid an async timout.

        it('updates the content of the feed',function() {
            feedTwoArray();
            let count = 0;
            let boundary = feedTwo.length;
            //console.log('! Count length is : ' + boundary);

            // A for loop is used to iterate between the arrays of feedOne and
            // feedTwo respectively, make a comparison, and (hopefully) return
            // false to signify that both values from the arrays don't match

            for (count = 0; count < boundary; count++ ) {
                //console.log('! Contents of first array: ' + feedOne[count]);
                //console.log('! Contents of second array: ' + feedTwo[count]);
                expect(feedOne[count] === feedTwo[count]).toBe(false);
            };
        });
    });
}());
