const { normalizeURL, getURLsfromHTML } = require("./crawl.js");
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
///
test("getURLsFromHTML", () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="http://mi.pagina.com/path/">
                mi pagina blog.com bro
            </a>
        </body>
    </html>
    `;
    const inputBaseURL = "http://mi.pagina.com/path/";
    const actualOutput = getURLsfromHTML(inputHTMLBody,inputBaseURL);
    const expectedOut = ["http://mi.pagina.com/path/"];
    expect(actualOutput).toEqual(expectedOut);
})


test("getURLsFromHTML relative", () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">
                mi pagina blog.com bro
            </a>
        </body>
    </html>
    `;
    const inputBaseURL = "http://mi.pagina.com";
    const actualOutput = getURLsfromHTML(inputHTMLBody,inputBaseURL);
    const expectedOut = ["http://mi.pagina.com/path/"];
    expect(actualOutput).toEqual(expectedOut);
})


test("getURLsFromHTML both", () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="http://mi.pagina.com/path1/">
                mi pagina blog.com bro path one
            </a>
            <a href="/path2/">
                mi pagina blog.com bro path two XD
            </a>
        </body>
    </html>
    `;
    const inputBaseURL = "http://mi.pagina.com";
    const actualOutput = getURLsfromHTML(inputHTMLBody,inputBaseURL);
    const expectedOut = ["http://mi.pagina.com/path1/","http://mi.pagina.com/path2/"];
    expect(actualOutput).toEqual(expectedOut);
})
// !
test("getURLsFromHTML invalid", () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="invalid">
                invalid URL
            </a>
        </body>
    </html>
    `;
    const inputBaseURL = "http://mi.pagina.com";
    const actualOutput = getURLsfromHTML(inputHTMLBody,inputBaseURL);
    const expectedOut = [];
    expect(actualOutput).toEqual(expectedOut);
})