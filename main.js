const { crawlPage } = require('./crawl')
const { printReport } = require('./report');

const main = async () => {
    if(process.argv.length < 3){
        console.log("No website provied");
        process.exit(1);
    }

    if(process.argv.length > 3){
        console.log("to many command line args");
        process.exit(1);
    }

    const baseURL = process.argv[2];    
    
    console.log(`starting crawl of ${baseURL}`);

    const pages =  await crawlPage(baseURL, baseURL ,{})
    printReport(pages);
}
main()