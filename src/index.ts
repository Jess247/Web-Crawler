import * as fetch from 'node-fetch'

// hard coded fetch 
fetch("https://www.w3schools.com/w3css/tryw3css_templates_band.html")
    .then((response) => response.text())
    .then((html) => console.log("html", html));

// crawler async function

// const crawl = async ({url}) => {
//     // fetch data from website
//     const response = await fetch(url);
//     const html = await response.text();
//     console.log("html", html);
// };

// crawl ({
//     url: "https://www.w3schools.com/w3css/tryw3css_templates_band.html"
// });