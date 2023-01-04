
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
    let table = document.getElementById("tbl-products")

    let row = table.insertRow(0)

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    document.getElementById("find-button").onclick = async function() {
        const value = document.getElementById("value").value
        let products = await fetch(URL + "/" + value).then(response => response.json())


        cell1.innerHTML = products.name
        cell2.innerHTML = products.price + " kr."
        cell3.innerHTML = products.weight + " g."


        document.getElementById("delete-product").style = "display"
    }
}


function deleteProduct(){
    document.getElementById("delete").onclick = function () {

        const name = DOMPurify.sanitize(document.getElementById("value").value)

        const options = {};

        options.method = "DELETE"
        options.headers = {"Content-type": "application/json"}

        fetch(URL + "/" + name, options)

        location.reload()
    }
}