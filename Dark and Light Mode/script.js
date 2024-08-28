const changeTheme = document.querySelector('#theme-switch');
const Card = document.querySelector('.card');
const toggleLabel = document.querySelector('.toggle-label');

changeTheme.addEventListener('change', () => {

    document.body.classList.toggle('dark-mode');
     
   /* The `setTimeout` function in the provided code snippet is used to delay the execution of the code
   block inside it by a specified amount of time. In this case, the delay is set to 10 milliseconds
   (10ms). */

    setTimeout(() => {
        if(document.body.classList.contains('dark-mode')) {
            toggleLabel.innerText = 'Dark Theme';
        } else {
            toggleLabel.innerText = 'Light Theme';
        }
    }, 10); 
});
