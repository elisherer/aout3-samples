class NumberParser {
    /**
     * Our "production" code to be tested.
     * @param {string} numbers
     * @returns {number}
     */
    sum(numbers) {
        let [a, b] = numbers.split(",");
        return Number.parseInt(a) +
            Number.parseInt(b);
    }

}

/*
I'm using the module.exports for comparability with Node syntax for modules.
 This way we won't have to use any transpiler to run this code.
*/
module.exports = NumberParser;
