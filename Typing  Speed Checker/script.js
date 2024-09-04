// Adding all the references required For the Javascript..
const themeToggle = document.querySelector('#toggleTheme');
const closeModal = document.querySelector('#closeModal');
const modal = document.getElementById('typingSpeedModal');
const openModalButton = document.querySelector('.open-modal-button');
const UserInput = document.querySelector('#userInput');
const TextToType = document.querySelector('#textToType')
const Mistakes = document.querySelector('#mistakes')
const Wpm = document.querySelector('#wpm');
const TimeElasped = document.querySelector('#timeElapsed');
const RestartTest = document.querySelector('#restartTest')
const body = document.body;

let startTime = null; 
let intervalId;
let mistakes;

themeToggle.addEventListener('click', ()=>{
 
    body.classList.toggle('dark');

    setTimeout(()=>{
        if(body.classList.contains('dark')){
            themeToggle.innerText = "Dark-Mode"
        }else{
            themeToggle.innerText = "Light-Mode"
           
        }
    }, 10)
});

// Functionality to close the Modal when the user wants to close it 
closeModal.addEventListener('click', ()=>{

    modal.style.display = 'none';
    alert('You are clsoing the typing test!!!😊');
    
});

openModalButton.addEventListener('click', () => {
    openModalButton.innerText = 'Please Wait!🤚🏻! Opening..';
    
    setTimeout(() => {
        modal.style.display = 'flex';
    }, 1000); 

    setTimeout(() => {
        openModalButton.innerText = 'Start Typing Test';
    }, 1000); // Revert the button text back to "Open Typing Test" after 1 second
});


//Functionality to restart the Test....
RestartTest.addEventListener('click', ()=>{
   
     startTime = null;
     clearInterval(intervalId);
     Wpm.innerText = 0;
     TimeElasped.innerText = null;
     UserInput.value = '';
     TextToType.innerHTML = 'The quick brown fox jumps over the lazy dog.';
     UserInput.disabled = false;
});

UserInput.addEventListener('input', () => {
    if (!startTime) {
        startTime = new Date().getTime();
        intervalId = setInterval(updateTime, 1000);
    }
    const currentTime = new Date().getTime();
    const timeElapsed = (currentTime - startTime) / 1000;
    TimeElasped.innerText = timeElapsed.toFixed(1);

    const wordsTyped = UserInput.value.trim().split(/\s+/).length;
    const wpm = (wordsTyped / timeElapsed) * 60;    
    Wpm.innerText = Math.floor(wpm);

    updateTextHighlighting();

    if (UserInput.value === TextToType.innerText) {
        clearInterval(intervalId);
        UserInput.disabled = true;
    }
});

// Now Functionality to the Timer
function updateTime(){
    const currentTime = new Date().getTime;
    const timeElaspse = (currentTime - startTime)/1000;
    TimeElasped.innerText = timeElaspse.toFixed(2);
};

function updateTextHighlighting() {
    const typedText = UserInput.value;
    const referenceText = TextToType.innerText;
    let highlightedText = '';
   let mistakes = 0;

    for (let i = 0; i < referenceText.length; i++) {
        if (i < typedText.length) {
            if (typedText[i] === referenceText[i]) {
                highlightedText += `<span class="correct">${referenceText[i]}</span>`;
            } else {
                highlightedText += `<span class="incorrect">${referenceText[i]}</span>`;
                mistakes+=1;
            }
        } else {
            highlightedText += referenceText[i];
        }
    }

    TextToType.innerHTML = highlightedText;
    Mistakes.innerText = mistakes;
}