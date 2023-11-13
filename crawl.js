const {JSDOM} = require('jsdom');

const crawlPage = async (currentURL) => {
    console.log(`actively crawling: ${currentURL}`)
    try {
        const response = await fetch(currentURL);
        if(response.status > 399){
            console.log(`error in fetch with status code: ${response.status} on page: ${currentURL}`)
            return
        }

        const contentType = response.headers.get("content-type");
        if(!contentType.includes("text/html")){
            console.log(`non html response, content type: ${contentType}, on page: ${currentURL}`);
            return;

        }

        console.log( await response.text());
    } catch (err) {
        console.log(`error in fetch: ${err.message}, on page: ${currentURL}`)
    }

}


const getURLsfromHTML = (htmlBody, baseUrl) => {
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');
    for (const linkElement of linkElements) {
        if(linkElement.href.slice(0,1) === "/"){
            // * relative
            try {
                const  urlObj = new URL(`${baseUrl}${linkElement.href}`);
                urls.push(urlObj.href);
                
            } catch (err) {
                console.log(`Error with relative url: ${err.message}`)
            }
        }else{
            // * relative
            try {
                const  urlObj = new URL(linkElement.href);
                urls.push(linkElement.href);
            } catch (err) {
                console.log(`Error with relative url: ${err.message}`)
            }
        }
    }
    return urls;
}


const normalizeURL=(urlString)=>{
    const urlObj = new URL(urlString)
    const hostPath  =  `${urlObj.hostname}${urlObj.pathname}`;

    return hostPath.length > 0 && hostPath.slice(-1) === '/' ?
        hostPath.slice(0,-1)
        : hostPath;
}

module.exports = {
    crawlPage,
    normalizeURL,
    getURLsfromHTML
}