const newTask = document.querySelector('#newtask input');
const cont = document.querySelector('.container');
const tasks = document.querySelector('#tasks');
const add = document.querySelector('#push');

add.addEventListener('click', ()=>{
    if(newTask.value.length === 0){
        alert("Please Enter the Task");
    } else{
        tasks.innerHTML += `
       <div class="task">
       <span id="taskname">
           ${newTask.value}
       </span>
       <button class="delete">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
       </button>
   </div>`;
     
      const delete_item = document.querySelectorAll('.delete');
      for(let i = 0  ;i < delete_item.length; i++){
       delete_item[i].onclick = function(){
           this.parentNode.remove();
           /* The `parentNode` property in JavaScript is used to access the parent node of a
           specified node in the DOM (Document Object Model). In the provided code snippet,
           `parentNode` is used in the context of removing a task element when the delete
           button associated with that task is clicked. */
        }      
      }
    }
}) ;
