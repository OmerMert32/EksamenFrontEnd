export function initShowProducts(){
    getProducts()
}

const URL = "http://localhost:8080/product"

function getProducts(){
    const products = fetch(URL).then(response => response.json())

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