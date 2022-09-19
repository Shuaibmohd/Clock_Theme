const hourElm = document.querySelector('.hour');
const minuteElm = document.querySelector('.minute');
const secondElm = document.querySelector('.second');
const timeElm = document.querySelector('.time');
const dateElm = document.querySelector('.date');
const darkMode = document.querySelector('.dark-mode');


const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

darkMode.addEventListener('click', (e) => {
    const html = document.querySelector('html')   
    
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    }else {
        html.classList.add('dark')
        e.targer.innerHTML = 'Light Mode'
    }
    

})




function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hour = time.getHours()
    const hoursForClock = hour % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const ampm = hour >= 12 ? 'PM' : 'AM'

    hourElm.style.transform = ` translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)
    `
    minuteElm.style.transform = ` translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)
    `
    secondElm.style.transform = ` translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)
    `

    timeElm.innerHTML = `${hoursForClock}:${minute < 10 ? 
    `0${minute}` : minute } ${ampm}`

    dateElm.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (number, inMin, inMax, outMin, outMax) =>
{
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()

setInterval((setTime), 1000)



