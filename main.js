const { crawlPage } = require('./crawl')

const main = () => {
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
    crawlPage(baseURL)
}
main()