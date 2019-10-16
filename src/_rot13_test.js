"use strict";

const assert = require("./assert");
const rot13 = require("./rot13");

describe("ROT-13", function(){
    it("doesn't transform non-alphabetic characters", function(){
        assert.equal(rot13.transform(""),"", "empty string");
        assert.equal(rot13.transform("123"),"123", "numbers");
        assert.equal(rot13.transform("$%^"),"$%^", "symbols");
    });

    it("converts alphabetic characters", function(){
        assert.equal(rot13.transform("h"),"u", "lower case");
        assert.equal(rot13.transform("H"),"U", "upper case");

    });

});