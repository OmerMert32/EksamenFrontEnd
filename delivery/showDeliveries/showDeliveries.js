
export function initShowDeliveries(){
getDeliveries()
}


const URL = "http://localhost:8080/delivery"

function getDeliveries() {
    const deliveries = fetch(URL).then(response => response.json())

    deliveries.then(products => {


        const tablerows = products.map(d => `
    <tr>
        <td>${d.deliveryDate}</td>
        <td>${d.fromWareHouse}</td>
        <td>${d.destination}</td>
    </tr>
    `).join("")

        document.getElementById("tbl-products").innerHTML = tablerows

    }).catch(e => console.log(e))
}