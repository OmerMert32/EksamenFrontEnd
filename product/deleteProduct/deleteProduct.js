
export function initDeleteProduct(){
    hideDiv()
    showDiv()
    deleteProduct()
}
const URL = "http://localhost:8080/product"


function hideDiv(){
    document.getElementById("delete-product").style = "display:none"
}

function showDiv(){
    document.getElementById("find-button").onclick = function(){

        loadTable()

        document.getElementById("delete-product").style = "display"
    }
}

function loadTable(){
    const value = document.getElementById("value").value
    const products = fetch(URL + "/s/" + value).then(response => response.json())

    console.log(products)
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

function deleteProduct(){
    document.getElementById("delete").onclick = function () {

        const name = DOMPurify.sanitize(document.getElementById("value").value)

        const options = {};

        options.method = "DELETE"
        options.headers = {"Content-type": "application/json"}

        fetch(URL + "/" + name, options)
    }
}