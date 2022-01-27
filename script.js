import {heading, availableBoats, user} from "./data.js";

const userName = document.getElementById('userName');
const pointsLeft = document.getElementById('pointsLeft');

userName.innerText += user.name;
pointsLeft.innerText += user.points;

// creating the table with table head and table body.
let calenderContainer = document.getElementById('calenderContainer');
let table = document.createElement('table');
table.id = 'table';
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

//row 1
//First creating the header which will be constant and then looping to create the week days. 
let row_1 = document.createElement('tr');

let th1 = document.createElement('th');
th1.innerHTML += 'Tillgängliga Båtar';
row_1.appendChild(th1)

for(let i = 0; i < heading.length; i++) {
    let title = document.createElement('span');
    title.id = 'heading';
    title.innerHTML += heading[i].day;
    let date = document.createElement('span');
    date.id = 'date'
    date.innerHTML += heading[i].date;
    let th = document.createElement('th');
    th.id = heading[i].date;
    th.appendChild(title);
    th.appendChild(date);
    row_1.appendChild(th);
}

thead.appendChild(row_1);

//Loop for row 2, 3 and 4...
for(let x = 0; x < availableBoats.length; x++) {//Outer loop to iterate through the data and create table accordingly.
    //creating the image in the first column 
    let newRow = document.createElement('tr');
    let td = document.createElement('td');
    let img = document.createElement('img');
    img.src = availableBoats[x].img;
    td.appendChild(img);
    newRow.appendChild(td);

    for(let i = 0; i<heading.length; i++) {//Inner loop to create all the necessary cells. 
        //Creating the rest of the columns.
        let boatName = document.createElement('span');
        boatName.id = "boatName";
        boatName.innerHTML += availableBoats[x].name
        let cost = document.createElement('span');
        cost.id = "cost"
        cost.innerHTML += availableBoats[x].price;
        let td = document.createElement('td');
        td.id = `row${x+1}col${i+1}`;
        td.classList.add(i)
        td.appendChild(boatName);
        td.appendChild(cost);
        newRow.appendChild(td);
    }
    tbody.appendChild(newRow);
}

calenderContainer.appendChild(table);



for(let i = 1; i < table.rows.length; i++) {//Creating and displaying the popup window;
    table.rows[i].addEventListener("click", function(event) {
       let cell = this.cells[i].children;
       let text  = cell[0].innerText;
       let h1 = document.getElementById('popHeading')
       h1.innerText = `Vill ni boka ${text}?`;
       let popImg = document.getElementById('popImg');
       popImg.setAttribute('src', availableBoats[i-1].largeImg)
       let bookingDate = document.getElementById('bookingDate');
       let col = event.target.parentElement.getAttribute('class');
       bookingDate.innerText = `Bokningsdatum: ${heading[col].date}`
       let totalCost = document.getElementById('totalCost');
       let cost = cell[1].innerText;
       totalCost.innerText = `Totalpris: ${cost} poäng.`

       document.getElementById('myPopup').style.display = 'block'
        //Changing the background color of the booked cell.  
       document.getElementById('bookButton').onclick = function() {
            let elementId = event.target.parentElement.id;
            document.getElementById(elementId).style.backgroundColor = '#ffb3b3'
            user.points -= cost; 
            console.log(user)
            localStorage.setItem(elementId, 'booked');
            document.getElementById('myPopup').style.display = 'none'
        }

    })
}

//Displaying the booked cells onLoad
for(let i = 0; i < availableBoats.length; i++) {
    for(let n = 0; n < heading.length; n++) {
        let elementId = `row${i}col${n}`
        if(localStorage.getItem(elementId) === 'booked') {
            document.getElementById(elementId).style.backgroundColor = '#ffb3b3'
            document.getElementById(elementId).style.pointerEvents = 'none'
        }
    }
}

//Closing the popup window
document.getElementById('close').onclick = function closePopup() {
    document.getElementById('myPopup').style.display = 'none'
}

document.getElementById('closeButton').onclick = function closePopup() {
    document.getElementById('myPopup').style.display = 'none'
}