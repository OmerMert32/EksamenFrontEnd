
export function initSpecefikProduct(){
    hideDiv()
    showDiv()
}
const URL = "http://localhost:8080/product"


function hideDiv(){
    document.getElementById("table").style = "display:none"
}

function showDiv(){
        document.getElementById("find-button").onclick = async function(){

            await loadTable()

            document.getElementById("table").style = "display"
    }
}

function loadTable(){
    const value = document.getElementById("value").value
    const products = fetch(URL + "/s/" + value).then(response => response.json())

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