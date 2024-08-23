const Btnrestart = document.getElementById('restart');
const BtnnewGame = document.getElementById('new-game');
let Message = document.getElementById('message');
const PopUp = document.querySelector('.popup');
const BtnOption = document.querySelectorAll('.button-option');
const BtnPause = document.getElementById('pause');

let xTurn = true;
let count = 0;

let winning = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],  
];

let gamePause = false; // Initial state should be false (game is active)

// Function to pause the game
const pauseGame = () => {
    BtnOption.forEach((element) => (element.disabled = true));
    BtnPause.innerText = "Resume"; // Change button text to "Resume"
    gamePause = true;
};

// Function to resume the game
const resumeGame = () => {
    BtnOption.forEach((element) => {
        // Re-enable only the buttons that are empty
        if (element.innerText === "") {
            element.disabled = false;
        } else {
            element.disabled = true; // Ensure filled buttons remain disabled
        }
    });
    BtnPause.innerText = "Pause"; // Change button text back to "Pause"
    gamePause = false;
};

// Add a check in the click event to prevent moves when the game is paused
BtnOption.forEach((element) => {
    element.addEventListener('click', function() {
        if (gamePause) return; // Prevent further moves if the game is paused

        if (xTurn) {
            xTurn = false;
            element.innerHTML = 'X';
        } else {
            xTurn = true;
            element.innerHTML = 'O';
        }
        element.disabled = true;
        count += 1;
        winCheck();
    });
});

// Giving the functionality to resume or pause the game
BtnPause.addEventListener('click', () => {
    if (gamePause) {
        resumeGame();
    } else {
        pauseGame();
    }
});

// Function to check if the user has won
const winner = (letter) => {
    disableButtons();
    if (letter === 'X') {
        Message.innerHTML = "🎉 X wins the Game";
    } else {
        Message.innerHTML = "🎉 O wins the Game";
    }
};

// Function to check for a win or draw
const winCheck = () => {
    for (let i of winning) {
        let [element1, element2, element3] = [
            BtnOption[i[0]].innerText,
            BtnOption[i[1]].innerText,
            BtnOption[i[2]].innerText,
        ];
        // Check if elements are filled
        if (element1 !== "" && element2 !== "" && element3 !== "") {
            if (element1 === element2 && element2 === element3) {
                // If all 3 buttons have the same values, pass the value to the winner function
                winner(element1);
                return; // Exit the loop once a winner is found
            }
        }
    }
    if (count === 9) {
        drawFunction(); 
    }
};

// On clicking New Game button
const enableButton = () => {
    BtnOption.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    // Disable popup
    PopUp.classList.add("hide");
};

BtnnewGame.addEventListener("click", () => {
    count = 0;
    enableButton();
    xTurn = true; // Reset turn to X
    gamePause = false; // Ensure game is active
    BtnPause.innerText = "Pause"; // Reset pause button text
});

// Restart functionality
Btnrestart.addEventListener("click", () => {
    count = 0;
    enableButton();
    xTurn = true; // Reset turn to X
    gamePause = false; // Ensure game is active
    BtnPause.innerText = "Pause"; // Reset pause button text
});

// Function to handle a draw
const drawFunction = () => {
    disableButtons();
    Message.innerHTML = "Ooops😀,<br>It's a Draw";  
};

// Function to disable buttons and show the popup
const disableButtons = () => {
    BtnOption.forEach((element) => (element.disabled = true));
    // Enable popup
    PopUp.classList.remove('hide');
};
