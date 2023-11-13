const { normalizeURL } = require("./crawl.js");
const {test, expect } = require('@jest/globals');

test("normalizeURL strip protocol", () =>{
    const input = "http://mi.pagina.com/algo/algomas/";
    const actualOutput = normalizeURL(input);
    const expectedOut = "mi.pagina.com/algo/algomas";
    expect(actualOutput).toEqual(expectedOut);
})


test("normalizeURL strip trailing slash", () =>{
    const input = "http://mi.pagina.com/algo/algomas/";
    const actualOutput = normalizeURL(input);
    const expectedOut = "mi.pagina.com/algo/algomas";
    expect(actualOutput).toEqual(expectedOut);
})


test("normalizeURL capitals", () =>{
    const input = "http://mi.pagina.com/algo/algomas/";
    const actualOutput = normalizeURL(input);
    const expectedOut = "mi.pagina.com/algo/algomas";
    expect(actualOutput).toEqual(expectedOut);
})


test("normalizeURL strip http", () =>{
    const input = "http://mi.pagina.com/algo/algomas/";
    const actualOutput = normalizeURL(input);
    const expectedOut = "mi.pagina.com/algo/algomas";
    expect(actualOutput).toEqual(expectedOut);
})

