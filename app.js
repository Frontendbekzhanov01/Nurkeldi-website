let daybox = document.getElementById('day-box');
let hrbox = document.getElementById('hour-box');
let minbox = document.getElementById('mins-box');
let secbox = document.getElementById('sec-box');
let enddate = new Date(2023,2,23);
let endTime = enddate.getTime();

let addZeroes = (num) => (num < 10? `0${num}`:num); 

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingtime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;
    if(endTime > todayTime){
        let leftday = Math.floor(remainingtime/oneDay);
        let lefthr = Math.floor((remainingtime%oneDay) / oneHour);
        let leftmin = Math.floor((remainingtime%oneHour) / oneMin);
        let leftsec = Math.floor((remainingtime%oneMin)/1000);
        console.log(leftday,lefthr,leftmin,leftsec);
        daybox.textContent = addZeroes(leftday);
        hrbox.textContent = addZeroes(lefthr);
        minbox.textContent = addZeroes(leftmin);
        secbox.textContent = addZeroes(leftsec);
    }
    
}

let i = setInterval(countdown,1000);

countdown();

setInterval(createSnow, 100);

function createSnow() {
    var snow = document.createElement("i");
    snow.classList.add("fa-regular");
    snow.classList.add("fa-moon");

    fetch(" https://islomapi.uz/api/present/week?region=Moscow");
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration = Math.random() * 2 + 2 + "s";
    snow.style.opacity = Math.random(snow);
    snow.style.fontSize = Math.random * 10 + 10 + "px";
    document.body.append(snow);

    setTimeout(() => {
      snow.remove();
}, 4000);
}