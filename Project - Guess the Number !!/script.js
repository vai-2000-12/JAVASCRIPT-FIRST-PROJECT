'use strict';

let number = Math.trunc(Math.random()*20)+1;
let Score = 20;
let HighScore = 0;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
   
  if(!guess){
     document.querySelector('.message').textContent = 'No Number😢';  
  }else if(guess === number){
      document.querySelector('.message').textContent = '😍❤️Correct Number!';
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor ='#60b347';
      document.querySelector('.number').style.width ='30rem';
      HighScore++;
      document.querySelector('.highscore').textContent = HighScore;
  }else if(guess > number){
     if(Score > 1){
         document.querySelector('.message').textContent ='💀Guess is too High!'
         Score--;
         document.querySelector('.score').textContent = Score;
     }else {
        document.querySelector('.message').textContent ='🥲You Lost the Game!'
     }
}else if(guess < number){
    if(Score > 1){
        document.querySelector('.message').textContent ='💀Guess is too Low!'
        Score--;
        document.querySelector('.score').textContent = Score;
    }else {
       document.querySelector('.message').textContent ='🥲You Lost the Game!'
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
      Score = 20;
      number = Math.trunc(Math.random()*20)+1;

      document.querySelector('.message').textContent = "🤔`Start guessing...";
      document.querySelector('body').style.backgroundColor='#222';
      document.querySelector('.guess').value = '';

      document.querySelector('.score').textContent = Score;
      document.querySelector('.highscore').textContent = 0;
      

      document.querySelector('.number').textContent = '?';
      document.querySelector('.number').style.width='15rem';




})