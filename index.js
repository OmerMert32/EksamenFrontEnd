import "https://unpkg.com/navigo"

import {
    adjustForMissingHash, renderTemplate, loadHtml
} from "./utils.js"
import {initShowProducts} from "./product/showProducts/showProducts.js";
import {initAddProduct} from "./product/addProduct/addProduct.js";
import {initEditProduct} from "./product/editProduct/editProduct.js";
import {initSpecefikProduct} from "./product/specifikProduct/specifikProduct.js";
import {initDeleteProduct} from "./product/deleteProduct/deleteProduct.js";
import {initShowDeliveries} from "./delivery/showDeliveries/showDeliveries.js";
import {initAddDelivery} from "./delivery/addDelivery/addDelivery.js";
import {initShowMyDeliveries} from "./delivery/showMyDeliveries/showMyDeliveries.js";


window.addEventListener("load", async () => {

    const templateHomePage = await loadHtml("home/homePage.html")
    const templateShowProducts = await loadHtml("product/showProducts/showProducts.html")
    const templateAddProduct = await loadHtml("product/addProduct/addProduct.html")
    const templateEditProduct = await loadHtml("product/editProduct/editProduct.html")
    const templateSpecifikProdukt = await loadHtml("product/specifikProduct/specifikProduct.html")
    const templateDeleteProduct = await loadHtml("product/deleteProduct/deleteProduct.html")
    const templateShowDeliveries = await loadHtml("delivery/showDeliveries/showDeliveries.html")
    const templateAddDelivery = await loadHtml("delivery/addDelivery/addDelivery.html")
    const templateShowMyDeliveries = await loadHtml("delivery/showMyDeliveries/showMyDeliveries.html")
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
            "/deleteProduct": (match) => {renderTemplate(templateDeleteProduct, "content")
                initDeleteProduct()
            },
            "/showDeliveries": (match) => {renderTemplate(templateShowDeliveries, "content")
                initShowDeliveries()
            },
            "/addDelivery": (match) => {renderTemplate(templateAddDelivery, "content")
                initAddDelivery();
            },
            "/showMyDeliveries": (match) => {renderTemplate(templateShowMyDeliveries, "content")
                initShowMyDeliveries()
            },
        })
        .notFound(() => {
            renderTemplate(templateNotFound, "content")
        })
        .resolve()
});
