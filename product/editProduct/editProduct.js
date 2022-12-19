
export function initEditProduct(){
    hideDiv()
    showDiv()
    editProduct()
}

const URL = "http://localhost:8080/product"

function hideDiv(){
    document.getElementById("edit-product").style = "display:none"
}

function showDiv(){
    document.getElementById("find-button").onclick = async function(){

        const name = document.getElementById("value").value;

        const product = await fetch(URL + "/" + name).then(response => response.json())

        console.log(product)
        document.getElementById("name").value = product.name
        document.getElementById("price").value = product.price
        document.getElementById("weight").value = product.weight

        document.getElementById("edit-product").style = "display"

    }
}
function editProduct(){
    document.getElementById("save-changes").onclick = function () {

        const editedProduct = {};

        editedProduct.name = DOMPurify.sanitize(document.getElementById("name").value)
        editedProduct.price = DOMPurify.sanitize(document.getElementById("price").value)
        editedProduct.weight = DOMPurify.sanitize(document.getElementById("weight").value)

        const name = document.getElementById("name").value;

        const options = {};

        options.method = "PATCH"
        options.headers = { "Content-type": "application/json" }
        options.body = JSON.stringify(editedProduct)

        fetch(URL + "/" + name, options)
        location.reload();

    }
}