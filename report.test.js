const { sortPages } = require("./report.js");
const {test, expect } = require('@jest/globals');

test("sortPages sort 2 pages", () =>{
    const input = {
        "http://wagslane.dev/path" : 1,
        "http://wagslane.dev" : 3
    };
    const actualOutput = sortPages(input);
    const expectedOut = [
        ["http://wagslane.dev",3],
        ["http://wagslane.dev/path",1]
    ];
    expect(actualOutput).toEqual(expectedOut);
})


test("sortPages sort 5 pages", () =>{
    const input = {
        "http://wagslane.dev/path" : 1,
        "http://wagslane.dev" : 3,
        "http://wagslane.dev/path2" : 6,
        "http://wagslane.dev/path3" : 7,
        "http://wagslane.dev/path4" : 9
    };
    const actualOutput = sortPages(input);
    const expectedOut = [
        ["http://wagslane.dev/path4",9],
        ["http://wagslane.dev/path3",7],
        ["http://wagslane.dev/path2",6],
        ["http://wagslane.dev",3],
        ["http://wagslane.dev/path",1],
    ];
    expect(actualOutput).toEqual(expectedOut);
})