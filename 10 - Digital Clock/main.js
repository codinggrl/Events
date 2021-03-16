const clockElement = document.querySelector('.clock');
const buttons = document.querySelectorAll('.format button');

let format ;

setInterval(generateTime, 1000);


function generateTime(){
    format = clockElement.getAttribute('data-format')
    const date = new Date;

    let hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const timeStatus = (hour > 12 )  ? 'PM' : 'AM';

    if(format === "12"){
        hour = (hour > 12) ? hour % 12 : hour;
    }
    
    clockElement.innerHTML = `<h1> ${hour} : ${min} : ${sec} ${timeStatus} </h1>`;
}


buttons.forEach(button=> {
button.addEventListener('click', () =>{
    format = button.getAttribute('data-format');
    clockElement.setAttribute('data-format', format);
    generateTime();
})
});