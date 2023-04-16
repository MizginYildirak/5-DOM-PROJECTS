let start = document.querySelector(".start-btn");
let stop = document.querySelector(".stop-btn");
let reset = document.querySelector(".reset-btn");
let minuteElement = document.querySelector(".minute");
let secondElement = document.querySelector(".second");

let minute = 0;
let second = 0;
let timeout;



function handleDisabledButtons(isStartDisabled) {
    start.disabled = isStartDisabled;
    stop.disabled = !isStartDisabled;

    if (isStartDisabled) {
        start.style.backgroundColor = 'rgb(60,179,113,0.3)';
    } else {
        stop.style.backgroundColor = 'rgb(255,0,0,0.3)';
    }
}

start.addEventListener('click', function() {
   timeout = setInterval( function() {
            second++;
           secondElement.innerHTML = second;

           if (second <= 9) {
            secondElement.innerHTML = '0' + second;
           } else if (second <= 59) {
            secondElement.innerText = second;
          } else {
            minute += 1;
            minuteElement.innerText = minute.toString().padStart(2, '0');
            second = 0;
          }
          handleDisabledButtons (true)
        }, 1000) 

     
})


stop.addEventListener('click', function() {
        clearInterval(timeout);
        handleDisabledButtons (false);
})

reset.addEventListener('click', function() {
    clearInterval(timeout);
    secondElement.innerText = '00';
    minuteElement.innerText = '00';
    minute = 0;
    second = 0;
    reset.style.backgroundColor = '	rgb(255,127,80,0.3)';
})