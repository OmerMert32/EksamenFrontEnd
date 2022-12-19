import "https://unpkg.com/navigo"

import {
    adjustForMissingHash, renderTemplate, loadHtml
} from "./utils.js"



window.addEventListener("load", async () => {


    //const templateNotFound = await loadHtml("notfound/notfound.html")

    adjustForMissingHash()

    const router = new Navigo("/", { hash: true });
    window.router = router

    router
        .hooks({
            before(done, match) {
                done()
            }
        })
        .on({
            "/":(match) =>{

            },
            "/": (match) => {renderTemplate(templateCreate, "content-page")

            },

        })
        .notFound(() => {
            renderTemplate(templateNotFound, "content")
        })
        .resolve()
});


window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
        + ' Column: ' + column + ' StackTrace: ' + errorObj);
}