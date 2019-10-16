// Copyright Titanium I.T. LLC.
"use strict";

const assert = require("./assert.js");
const App = require("./app");

describe("Application", function() {

	it("ROT-13s input", function() {
		//assert.todo();
		const app = new App(); //arrange
		const result = app.run("hello");//act
		assert.equal(result, "uryyb");//assert
		//mocks can't tell a story. they are backwards with too much cruft for setup
	});

});