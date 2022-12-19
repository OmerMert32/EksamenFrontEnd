import "https://unpkg.com/navigo"

import {
    adjustForMissingHash, renderTemplate, loadHtml
} from "./utils.js"



window.addEventListener("load", async () => {

    const templateCreate = await loadHtml("test.html")
    const templateNotFound = await loadHtml("test.html")

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
            "/test": (match) => {renderTemplate(templateCreate, "content-page")

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