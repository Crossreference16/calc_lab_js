const {Calculator} = require('./calculator');


//the 2 A's of testing, AAA:
//Arrange - arrange the data.
//Act - call the function we are actually testing.
//Assert - check the value against our expectation.


let calculator; // this allows the calculator object to be used outside of the below 'beforeEach' function.
beforeEach(() => {
    calculator = new Calculator;
})

// describe give you the name of the test.
describe('testing addition', () => {
    test('can add two positive numbers', () => { // this this is a anonymous inline functionL () => {}
        const expected = 5;
        const actual = calculator.add(2,3);
        expect(actual).toBe(expected);
    }) 

    test ('can add a negative and a positive number', () => {
        const expected = -2;
        const actual = calculator.add(-5,3);
        expect(actual).toBe(expected);
    })

    test('can add two large positive numbers', () => { 
        const expected = 100000
        const actual = calculator.add(60000,40000)
        expect(actual).toBe(expected);
    });

    test('can add two negative numbers', () => { 
        const expected = 50;
        const actual = calculator.add(50,0);
        expect(actual).toBe(expected);
    }) 

    test('can add zero', () => { 
        const expected = -10;
        const actual = calculator.add(-7,-3);
        expect(actual).toBe(expected);
    }) 

})

////////Subtract test////////////////
describe('testing subtraction', () => {
    test('can subtract two positive numbers', () => {
        const expected = 2;
        const actual = calculator.subtract(5,3);
        expect(actual).toBe(expected);
    })

    test ('can subtract a negative and a positive number', () => {
        const expected = -3;
        const actual = calculator.subtract(-2,1);
        expect(actual).toBe(expected);
    })

    test('can subtract two negative numbers', () => {
        const expected = 2;
        const actual = calculator.subtract(-4, -6);
        expect(actual).toBe(expected);
    })
})

///////////Multiply Test///////////////////
describe('testing multiplication', () => {
    test('can multiply two positive numbers', () => {
        const expected = 10;
        const actual = calculator.multiply(2,5);
        expect(actual).toBe(expected);
    })

    test('can multiply a positive and a negative number', () => {
        const expected = -20;
        const actual = calculator.multiply(-4,5);
        expect(actual).toBe(expected);
    })

    test('can multiply two negative numbers', () => {
        const expected = 16;
        const actual = calculator.multiply(-2, -8);
        expect(actual).toBe(expected);
    })
})


///////////Divide Test////////////////
describe('testing multiplication', () => {
    test('can divide two positive numbers', () => {
        const expected = 5;
        const actual = calculator.divide(10,2);
        expect(actual).toBe(expected);
    })

    test('can divide a positive and a negative number', () => {
        const expected = -5;
        const actual = calculator.divide(-10,2);
        expect(actual).toBe(expected);
    })
})


/////////Modulus Test/////////////////
describe('testing modulus', () => {
    test('can find modulus using negative number', () => {
        const expected = 9;
        const actual = calculator.modulus(-9);
        expect(actual).toBe(expected);
    })

    test('can find modulus using positive number', () => {
        const expected = 9;
        const actual = calculator.modulus(9);
        expect(actual).toBe(expected);
    })
})
