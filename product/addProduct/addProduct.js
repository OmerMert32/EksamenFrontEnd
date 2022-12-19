
export function initAddProduct(){
addProduct();
}

const URL = "http://localhost:8080/product"

function addProduct(){
    document.getElementById("create-button").onclick = function (){

        const newProduct = {};

        newProduct.name = DOMPurify.sanitize(document.getElementById("name").value)
        newProduct.price = DOMPurify.sanitize(document.getElementById("price").value)
        newProduct.weight = DOMPurify.sanitize(document.getElementById("weight").value)

        const options = {};

        options.method = "POST"
        options.headers = { "Content-type": "application/json" }
        options.body = JSON.stringify(newProduct)

        fetch(URL, options)
        location.reload();
    }
}