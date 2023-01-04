export function initShowMyDeliveries(){
    loadTabels()
}

const URL = "http://localhost:8080/delivery"

function loadTabels(){
    document.getElementById("table").style = "display:none"
    document.getElementById("table-products").style = "display:none"
    document.getElementById("search").onclick = function () {

        const destination = DOMPurify.sanitize(document.getElementById("destination").value)

        const delivery = fetch(URL + "/s/" + destination).then(response => response.json())


        delivery.then(products => {
            const tablerows = products.map(d => `
    <tr>
        <td>${d.deliveryDate}</td>
        <td>${d.fromWareHouse}</td>
        <td>${d.destination}</td>
    </tr>
    `).join("")
            document.getElementById("tbl-delivery").innerHTML = tablerows
        }).catch(e => console.log(e))




        delivery.then(products => {
            const tablerows = products.map(d => `
    <tr>
        <td>${d.name}</td>
        <td>${d.weight}</td>
        <td>${d.quantity}</td>

    </tr>
    `).join("")

            document.getElementById("tbl-products").innerHTML = tablerows

        }).catch(e => console.log(e))



        document.getElementById("table").style = "display"
        document.getElementById("table-products").style = "display"

    }
}

