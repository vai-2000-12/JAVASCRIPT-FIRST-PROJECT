//getting all the required classes and ids from html Page
const addTask = document.querySelector('#add-task');
const Input = document.querySelector('.todo-input');
const ThemeButton = document.querySelector('#theme-toggle');
const TaskContainer = document.querySelector('.task-container');

// Implementing the Dark Mode feature..
//getting all the classes and ids from the html

const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// This Code basically adds the Task in the ToDo List.. 
// if the input field is empty then alert Message will be prompted...

addTask.addEventListener('click', ()=>{
     if(Input.value.length === 0){
         alert("❌🙏🏻Oops!! Enter the Task First✍🏻❌");
     }else{
        TaskContainer.innerHTML += 
        `
        <div class="task">
        <span id = "TaskName">
              ${Input.value}
        </span>   
          <button class = "delete">  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </button>
        </div>
        `;

        // For every Item added to the list this code will help you to delete the 
        // items from the list and it will only be shown when the task is addeed

        const delete_item = document.querySelectorAll('.delete');
        for(let i = 0; i < delete_item.length ; i++){
            delete_item[i].onclick = function(){
                  this.parentNode.remove();
            }
        }
     }
});

// This is the code for Changing the Theme from LIGHT - > DARK (basic implementation)
// Basic Toggling Effect using javascript..

themeToggle.addEventListener('click' , ()=>{
    
      body.classList.toggle('dark-theme');
      body.classList.toggle('light-theme');
      
    setTimeout(()=>{
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Dark Theme';
        } else {
            themeToggle.textContent = 'Light Theme';
        }
    }, 10)
   
})
