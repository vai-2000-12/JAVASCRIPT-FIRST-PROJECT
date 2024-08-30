const themeToggleBtn = document.querySelector('#toggleMode');
let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
const body = document.body;

themeToggleBtn.addEventListener('click', ()=>{
    
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    setTimeout(() => {
        if(body.classList.contains('dark-mode')){
            themeToggleBtn.innerText = 'Dark-Mode'
        }else{
            themeToggleBtn.innerText = 'Light-Mode'
        }
    }, 30);
});

/* Basically /* The `setInterval` function in JavaScript is used to repeatedly execute a function or
code snippet at specified intervals. In this code snippet, the `setInterval` function
is being used to update the displayed time (hours, minutes, and seconds) on the webpage
every second. The function inside `setInterval` gets the current time using `new
Date()`, and then updates the HTML elements displaying the hours, minutes, and seconds
with the corresponding values from the current time. This creates a real-time clock
effect on the webpage. */

 setInterval(()=>{
     let currentTime = new Date();

     hrs.innerHTML = currentTime.getHours();
     min.innerHTML = currentTime.getMinutes();
     sec.innerHTML = currentTime.getSeconds();    

 }, 1000);
