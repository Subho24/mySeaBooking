let today = new Date('january 24, 2022');
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if(dd < 10) {
    dd = '0'+dd;
}
if(mm < 10) {
    mm = '0'+mm;
}

export const heading = [   
    {'day': 'Måndag', 'date':`${yyyy}-${mm}-${dd}` }, 
    {'day':'Tisdag', 'date':`${yyyy}-${mm}-${dd+1}`}, 
    {'day':'Onsdag', 'date':`${yyyy}-${mm}-${dd+2}`}, 
    {'day':'Torsdag', 'date':`${yyyy}-${mm}-${dd+3}`}, 
    {'day':'Fredag', 'date':`${yyyy}-${mm}-${dd+4}`}, 
    {'day':'Lördag', 'date':`${yyyy}-${mm}-${dd+5}`},
    {'day':'Söndag', 'date':`${yyyy}-${mm}-${dd+6}`}
];

export const availableBoats = [
    {'name': 'Regal 1800 LSR', 'img': './mysea-logo/boats/boat1.png', 'price': 12, 'largeImg': './mysea-logo/largeboats/boat1.jpg'},
    {'name': 'Evolution 265', 'img': './mysea-logo/boats/boat2.png', 'price': 20, 'largeImg': './mysea-logo/largeboats/boat2.jpg'},
    {'name': 'Gran Turismo', 'img': './mysea-logo/boats/boat3.png', 'price': 28, 'largeImg': './mysea-logo/largeboats/boat3.jpg'},
    {'name': 'Leader 36', 'img': './mysea-logo/boats/boat4.png', 'price': 36, 'largeImg': './mysea-logo/largeboats/boat4.jpg'}
];

export const user = {name: 'Pierre Corell', points: 175};



