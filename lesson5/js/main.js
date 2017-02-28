// Assignment one
var Calculator = (function() {
    var input = 0;

    function plusInteger(value) {
        input += value;
        return this;
    }

    function multiplyInteger(value) {
        input = input * value;
        return this;
    }

    function minusInteger(value) {
        input = input - value;
        return this;
    }

    function divideInteger(value) {
        input = input / value;
        return this;
    }

    return {
        plus: plusInteger,
        multiply: multiplyInteger,
        minus: minusInteger,
        divide: divideInteger,
        print: function() {
            return input;
        }
    }
}());

// Assignment two

// TASK 1
function findLongestWord(words) {
    var lenght = [];
    var word = 0;
    var largest = 0;

    for (var x = 0; x < words.length; x++) {
        word = words[x].length;
        lenght.push(word);
    }

    for (i = 0; i <= largest; i++) {
        if (lenght[i] > largest) {
            var largest = lenght[i];
        }
    }

    return largest;
};

// TASK 2
function sum(numbers) {
    var result = 0;

    for (var i in numbers) {
        result += numbers[i];
    }
    return result;
};

function multiply(numbers) {
    var result = 1;

    for (var i in numbers) {
        result = result * numbers[i];
    }
    return result;
};

// TASK 3
function evaluateExpression(operand1, operand2, operator) {
    return eval(operand1 + operator + operand2);
};

// TASK 4
function duplicate(array) {
    return array.concat(array);
};

// TASK 5

function fizzBuzz() {
    var o = 1;
    while (o < 100) {
        switch(true) {
        case (fizzBuzz(o)):
            console.log('FizzBuzz');
        break;

        case (buzz(o)):
            console.log('Buzz');
        break;

        case (fizz(o)):
            console.log('Fizz');
        break;

        default: console.log(o);
        }
        o++;
    }
    
    function fizzBuzz(o) {
        if (o % 15 == 0) {
            return true;
        }
    };
    
    function buzz(o) {
        if (o % 5 == 0) {
            return true;
        }
    };

    function fizz(O) {
        if (o % 3 == 0) {
            return true;
        }
    }
};

// Call this function to run all tests from LESSON 5
function runLesson5TestSuite() {
    testFindLongestWord();
    testSum();
    testMultiply();
    testEvaluateExpression();
    testDuplicate();
}

function testFizzBuzz() {
    Assert.true('fizz() Should return true.', fizzBuzz.fizz(3));
    Assert.true('buzz() Should return true.', fizzBuzz.buzz(5));
    Assert.true('fizzBuzz() Should return true.', fizzBuzz.fizzBuzz(15));
};

function testDuplicate() {
    Assert.arrays('duplicate() function test. Should return duplicate array [1,2,3].', 
    [1, 2, 3, 1, 2, 3], duplicate([1, 2, 3]));
};

function testEvaluateExpression() {
    Assert.integers('evaluateExpression() function test. 7 * 7', 49, evaluateExpression(7, 7, '*'));
    Assert.integers('evaluateExpression() function test. 7 + 7', 14, evaluateExpression(7, 7, '+'));
    Assert.integers('evaluateExpression() function test. 7 / 7', 1, evaluateExpression(7, 7, '/'));
    Assert.integers('evaluateExpression() function test. 7 - 7', 0, evaluateExpression(7, 7, '-'));
};

function testFindLongestWord() {
    Assert.integers('findLongestWord() function test.', 5, findLongestWord(['Aaaaa', 'Aa', 'Aaa', '@']));
}

function testSum() {
    Assert.integers('sum() function test.', 10, sum([1, 2, 3, 4]));
};

function testMultiply() {
    Assert.integers('multiply() function test.', 79920, multiply([1, 2, 3, 4, 5, 666]));
};