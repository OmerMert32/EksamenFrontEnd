import "https://unpkg.com/navigo"

import {
    adjustForMissingHash, renderTemplate, loadHtml
} from "./utils.js"
import {initShowProducts} from "./product/showProducts/showProducts.js";
import {initAddProduct} from "./product/addProduct/addProduct.js";
import {initEditProduct} from "./product/editProduct/editProduct.js";
import {initSpecefikProduct} from "./product/specifikProduct/specifikProduct.js";


window.addEventListener("load", async () => {

    const templateHomePage = await loadHtml("home/homePage.html")
    const templateShowProducts = await loadHtml("product/showProducts/showProducts.html")
    const templateAddProduct = await loadHtml("product/addProduct/addProduct.html")
    const templateEditProduct = await loadHtml("product/editProduct/editProduct.html")
    const templateSpecifikProdukt = await loadHtml("product/specifikProduct/specifikProduct.html")
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
                renderTemplate(templateHomePage, "content")
            },
            "/showProducts": (match) => {renderTemplate(templateShowProducts, "content")
                initShowProducts();
            },
            "/addProduct": (match) => {renderTemplate(templateAddProduct, "content")
                initAddProduct();
            },
            "/editProduct": (match) => {renderTemplate(templateEditProduct, "content")
                initEditProduct();
            },
            "/showSpecProduct": (match) => {renderTemplate(templateSpecifikProdukt, "content")
                initSpecefikProduct();
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