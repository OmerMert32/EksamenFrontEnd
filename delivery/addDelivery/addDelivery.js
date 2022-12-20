
export function initAddDelivery(){
    hideDiv()
    addDelivery()
    addProduct()
    reload()
}

const URL = "http://localhost:8080/delivery"
const productURL = "http://localhost:8080/product"
function hideDiv(){
    document.getElementById("add-product").style = "display:none"
}
function addDelivery() {
        document.getElementById("create-button").onclick = function (){

            const newDelivery = {};

            newDelivery.fromWareHouse = DOMPurify.sanitize(document.getElementById("fromWareHouse").value)
            newDelivery.destination = DOMPurify.sanitize(document.getElementById("destination").value)

            document.getElementById("addDelivery-page").style = "display:none"
            showProducts()
            document.getElementById("add-product").style = "display"
            const options = {};

            options.method = "POST"
            options.headers = { "Content-type": "application/json" }
            options.body = JSON.stringify(newDelivery)

            fetch(URL, options)
        }
}

    function showProducts() {

       const products = fetch(productURL).then(response => response.json())

        products.then(products => {

            const tablerows = products.map(p => `
    <tr>
        <td>${p.name}</td>
        <td>${p.price} kr.</td>
        <td>${p.weight} g.</td>
    </tr>
    `).join("")

            document.getElementById("tbl-products").innerHTML = tablerows

        }).catch(e => console.log(e))
}

function addProduct(){
    document.getElementById("add").onclick = async function () {
        const destination = DOMPurify.sanitize(document.getElementById("destination").value)

        const newProductOrder = {};

        const quantity = DOMPurify.sanitize(document.getElementById("quantity").value)
        const product = DOMPurify.sanitize(document.getElementById("name").value)

        const delivery = await fetch(URL + "/" + destination).then(response => response.json())
        const id = delivery.id
        const options = {};

        options.method = "POST"
        options.headers = { "Content-type": "application/json" }
        options.body = JSON.stringify(newProductOrder)

        await fetch(URL + "/" + id + "/" + product + "/" + quantity, options)

        const updatedDelivery = await fetch(URL + "/" + destination).then(response => response.json())

        document.getElementById("totalPrice").innerText = "Pris: " + updatedDelivery.totalPrice + " kr."
        document.getElementById("totalWeight").innerText = "Samlet vægt: " + updatedDelivery.totalWeight / 1000 + " kg."
        document.getElementById("name").value = ""
        document.getElementById("quantity").value = ""

    }
}

function reload(){
    document.getElementById("exit").onclick = function () {
        location.reload()
    }
}