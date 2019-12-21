var rowHtml = `
    <tr>
                        <td>%sn%</td>
                        <td style="padding-left:1rem !important; text-align:left; min-width: 8rem "> %product% </td>
                        <td>
                            <select class="opening">
                               
                            </select>
                        </td>
                        <td>
                            <select class="received">
                               
                            </select>
                        </td>
                        <td ><input class="total" type="number" disabled/></td>
                        <td>
                            <input class="salesPrice" type="number" placeholder="&dollar;">
                        </td>
                        <td>
                            <select class="salesQuantity">
                               
                            </select>
                        </td>
                        <td>
                            <select class="salesInduction">
                               
                            </select>
                        </td>
                        <td>
                            <input type="number" class="unilevelPrice" placeholder="&dollar;" >
                        </td>
                        <td>
                            <select class="unilevelQuantity">
                               
                            </select>
                        </td>
                        <td>
                            <select class="unilevelStepOut">
                               
                            </select>
                        </td>
                        <td>
                            <input type="number" placeholder="&dollar;" >
                        </td>
                        <td>
                            <select class="quantity-superDeals">
                            
                            </select>
                        </td>
                        <td>
                            <select class="bonus">
                               
                            </select>
                        </td>
                        <td>
                            <select class="food-salary">
                               
                            </select>
                        </td>
                        <td>
                            <input type="number" placeholder="&dollar;">
                        </td>
                        <td>
                            <select class="quantity-ember">
                               
                            </select>
                        </td>
                        <td>
                            <select class="closing">
                               
                            </select>
                        </td>

                    </tr>
`
var tbody = document.getElementById('tbody');

function date() {
    var dateDom = document.getElementById('date');
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    dateDom.innerHTML = `${day} - ${month} - ${year}`
}
function addition(name) {
    var values = document.querySelectorAll(`.${name}`),

        valDom = document.querySelector(`#${name}_sum`);
    var addValues = () => {
        var sum = 0;
        values.forEach(el => {
            if (el.value) sum = parseInt(el.value) + sum;
            else {
                sum = parseInt(el.innerHTML) + sum
                console.log(el.innerHTML);
            }
        })
        valDom.innerHTML = parseInt(sum)
    }
    values.forEach(cur => {
        cur.value = 0
        cur.addEventListener('change', () => {
            addValues();
        })
    });
}
function renderSpreadsheet(data) {
    var newRow;
    //  creating multiple rows
    for (var i = 0; i < data.product.length; i++) {
        newRow = rowHtml.replace('%product%', data.product[i]);
        newRow = newRow.replace('%sn%', i + 1)
        tbody.innerHTML += newRow;
    }
    var select = document.querySelectorAll('select');
    // creating 1000 options
    var newOption
    for (var i = 0; i <= 100; i++) {
        newOption += `<option>${i}</option>`;
        // "<option>" + i + "</option>"
    }
    // adding 1000 options to each select
    for (var i = 0; i < select.length; i++) {
        select[i].innerHTML = newOption
    }
    // Calculating the total
    var openingVal = document.querySelectorAll('.opening');
    var receivedVal = document.querySelectorAll('.received');
    var totalVal = document.querySelectorAll('.total');
    function add() {
        var sum = 0;
        document.querySelectorAll('.total').forEach(el => {
            if (el.value) sum = parseInt(el.value) + sum;
            else {
                sum = parseInt(el.innerHTML) + sum
            }
        })
        total_sum.innerHTML = parseInt(sum)
    }

    openingVal.forEach(function (el, index, arr) {
        el.addEventListener('change', () => {
            totalVal[index].value = parseInt(el.value) + parseInt(receivedVal[index].value);
            add()
        })
    })
    receivedVal.forEach(function (el, index, arr) {
        el.addEventListener('change', () => {
            totalVal[index].value = parseInt(el.value) + parseInt(openingVal[index].value);
            add()
        })
    })
    date();
    addition('opening')
    addition('received')
    addition('total')
    addition('salesPrice')
    addition('salesQuantity')
    addition('salesInduction')
    addition('unilevelPrice')
    addition('unilevelQuantity')
    addition('unilevelStepOut')
}
getDatas(renderSpreadsheet);

function getDatas(func) {
    var requests = new XMLHttpRequest();
    requests.onload = () => {
        var data = JSON.parse(requests.responseText)
        func(data);
        spinner(true);
    }
    requests.open('GET', './products.json', true);
    requests.send(null);
}
new WOW().init();