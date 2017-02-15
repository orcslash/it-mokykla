// AGAIN BETA TEST ASSERTS
// USE THIS Assert class to assert the following: integers, arrays, boolean.
// SAMPLE: Assert.integers('Verify that these two integers are the same', 5, 5);
if (Assert === undefined) {
    var Assert = {
        /**
         * Checks if returned integer value from function is as expected.
         * @param message Informative message about what was tested, function name can be provided.
         * @param expected Result that was returned from tested function.
         * @param actual Result that was returned from function.
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
         * @param message Informative message about what was tested, function name can be provided.
         * @param expected Array with given values.
         * @param actual Array value returned from function that neets to be asserted.
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
         * @param message Informative message about what was tested, function name can be provided.
         * @param boolean True or false statement.
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
         * @param message Informative message about what was tested, function name can be provided.
         * @param boolean True or false statement.
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
        }
    };
};