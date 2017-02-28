// AGAIN BETA TEST ASSERTS
// USE THIS Assert class to assert the following: integers, arrays, boolean.
// SAMPLE: Assert.integers('Verify that these two integers are the same', 5, 5);
if (Assert === undefined) {
    var Assert = {
        /**
         * Checks if returned integer value from function is as expected.
         * @param {String} message about what was tested, function name can be provided.
         * @param {String} expected result that was returned from function.
         * @param {String} actual result that was returned from tested function.
         */
        integers: function assert(message, expected, actual) {
            console.log(message);
            if (expected == actual) {
                console.log('Passed! Result is ' + actual + '.');
            } else {
                console.log('Failed! Expected ' +
                    expected + ' but was ' + actual + '.');
            }
            console.log('\n');
        },

        /**
         * Checks if arrays are equal.
         * @param {String} message about what was tested, function name can be provided.
         * @param {Array} expected array value returned from function that neets to be asserted.
         * @param {Array} actual array with given values.
         */
        arrays: function assert(message, expected, actual) {

            if (expected.length != actual.length) {
                console.log('Failed! Given arrays lengths are not the same!');
            }

            for (var x = 0; x < expected.length; ++x) {
                if (expected[x] !== actual[x]) {
                    console.log('Failed! Given arrays lengths are not the same!');
                }
            }

            console.log(message);
            console.log('Passed! Result is ' + actual + '.');
            console.log('\n');
        },

        /**
         * Checks if boolean is false.
         * @param {String} message about what was tested, function name can be provided.
         * @param {Boolean} boolean true or false statement.
         */
        true: function assert(message, boolean) {
            if (boolean === true) {
                console.log(message);
                console.log('Passed! Result is ' + boolean + '.');
                console.log('\n');
            } else {
                console.log('Failed! Result was ' + boolean);
                console.log('\n');
            };
        },

        /**
         * Checks if boolean is false.
         * @param {String} message about what was tested, function name can be provided.
         * @param {Boolean} boolean True or false statement.
         */
        false: function assert(message, boolean) {
            if (boolean === false) {
                console.log(message);
                console.log('Passed! Result is ' + boolean + '.');
                console.log('\n');
            } else {
                console.log('Failed! Result was ' + boolean);
                console.log('\n');
            };
        },

        /**
         * Checks if both arrays are equal.
         * @param {String} message about what was tested, function name can be provided.
         * @param {String} expected string that was returned from called function.
         * @param {String} actual string that result need to be equal to.
         */
        strings: function assert(message, actual, expected) {
            if (actual === expected) {
                console.log(message);
                console.log('Passed! Result is ' + actual + '.');
                console.log('\n');
            } else {
                console.log('Failed! Result was ' + actual);
                console.log('\n');
            }
        }
    };
};