// How to update the date , Project Page


let dateUpd = new Date();

let day = dateUpd.getDate();
let month = dateUpd.getMonth() +1;
let year = dateUpd.getFullYear();

let dayToday = day + '/' + month + '/' + year;
console.log(dayToday);

document.querySelector('.date').innerText = dayToday;


// Comprobar input email