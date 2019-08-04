//our production code (Suite Under Test - SUT)
const NumberParser2 = require('./number-parser2');

/**
 * A Test helper function for a simple assertion
 * @param actual (any type)
 * @param expected (any type)
 */
const assertEquals = (actual,expected) =>{
    if (actual!==expected){
        throw new Error(`Expected ${expected} but was ${actual}`);
    }
};

/**
 * A Test Helper Function
 * I named it 'check' so it doesn't get confused with other frameworks.
 * Wraps my code in try-catch and outputs things nicely to the console.
 * @param {string} name
 * @param {function} implementation
 */
const check = (name,implementation) =>{
    try{
        implementation();
        console.log(`"${name}" passed`);
    }
    catch (e) {
        console.error(`"${name}" FAILED`, e.stack);
    }
};

/**
 * Our actual tests begin here
 * To run: "node ch1/custom-test-phase2.js
 */
check("wasSumCalled by Default is False", () => {
    const np = new NumberParser2();
    assertEquals(false, np.wasSumCalled());
});
check("wasSumCalled after summing is true", () => {
    const np = new NumberParser2();
    np.sum("1,2");
    assertEquals(true,np.wasSumCalled());
});



