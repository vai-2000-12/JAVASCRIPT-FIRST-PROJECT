const themeToggle = document.querySelector('.toggle-dark-mode');
const Start = document.querySelector('.start');
const Stop = document.querySelector('.stop');
const Restart = document.querySelector('.restart');
const DisplayTime = document.querySelector('.time-display');
let timer;
const body = document.body;

themeToggle.addEventListener('click', () => {


    body.classList.toggle('dark-mode');
    setTimeout(() => {
        if (body.classList.contains('dark-mode')) {
            themeToggle.innerText = 'Dark-mode'
        } else {
            themeToggle.innerText = 'Light-mode'
        }
    }, 30)
});

let minute = 0;
let hours = 0;
let seconds = 0;
let isRunning = false; //initially the stop will be in the Stop state

//function To start the restart the Stopwatch...
Restart.addEventListener('click', () => {
  
    if (isRunning === true) {
        minute = 0;
        hours = 0;
        seconds = 0;
        updateDisplay(); //basically its a function which will only be updated only when  the user clicks on the restart Button
    } else {
        console.log(" The clock is already Stopped")
    }

});

function updateDisplay() {
    const resetHrs = hours.toString().padStart(2, '0');
    const resetMinutes = minute.toString().padStart(2, '0');
    const resetSeconds = seconds.toString().padStart(2, '0');

    DisplayTime.textContent = `${resetHrs} : ${resetMinutes} : ${resetSeconds}`;
};


//Function to Stop the Stop Watch from the Running State:

 /* `ClearInterval()` is a method in JavaScript used to stop the interval set by
   `setInterval()`. When you call `clearInterval(timer)`, it stops the interval specified
   by the `timer` variable. In the context of the provided code, it seems like there was a
   mistake in the comment, as `clearInterval()` is typically used with `setInterval()` for
   stopping intervals, not `setTimeout()`. */

Stop.addEventListener('click', () => {
    // console.log("Stop is Running")
    isRunning = false;
    clearInterval(timer);
});

// Function to START the stopwatch ...
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minute++;
                if (minute === 60) {
                    minute = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
}

Start.addEventListener('click', startTimer);