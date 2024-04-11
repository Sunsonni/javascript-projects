const checkFive = require('../checkFive.js');

describe("checkFive", function () {

    test("Checks result outputs 'is less than five.'", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
});