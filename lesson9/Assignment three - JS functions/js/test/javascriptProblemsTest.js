/**
 * Call this function to run all tests.
 * Unit tests for javascrtipProblems.js.
 * @author Mintautas Kiulkys
 * @since 2017-02-28
 */
function runJavascriptProblemsTestSuite() {
    shouldReturnSumOfTwoIntegers();
    shouldReturnSumOfAllArrayElements();
    shouldReturnSmallestNumber();
    shouldReturnFarenheitToCelsius();
    shouldReturnReversedString();
};

function shouldReturnSumOfTwoIntegers() {
    // given
    var arg = 3;

    // when
    var result = sumNumbers(arg, arg);

    // then
    Assert.integers("shouldReturnSumOfTwoIntegers() sum should be 6.", result, 6);
}

function shouldReturnSumOfAllArrayElements() {
    // given
    var array = [1, 2, 3, 4, 5];

    // when
    var result = sumArray(array);

    // then
    Assert.integers("shouldReturnSumOfAllArrayElements() value should be 15.", result, 15);
};

function shouldReturnSmallestNumber() {
    // when
    var result = findSmallest(60, 70, 80, 40, 14, 19);

    // then
    Assert.integers("shouldReturnSmallestNumber() value should be 14.", result, 14);
}

function shouldReturnFarenheitToCelsius() {
    // when
    var result = farenheitToCelsius(77);

    // then
    Assert.integers("shouldReturnFarenheitToCelsius() value should be 25.", result, 25);
}

function shouldReturnReversedString() {
    // given
    var myNameIs = "My Name Is Mintautas!";

    // when
    var result = reverse(myNameIs);

    //then
    Assert.strings("shouldReturnReversedString should return reversed string.", result,
        "!satuatniM sI emaN yM");
}