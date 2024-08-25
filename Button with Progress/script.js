const button = document.querySelector('.button');
let  text = document.querySelector('.text');
         button.addEventListener("click", ()=>{
            button.classList.add("progress..");
            button.style.background ='red';
            button.style.transform ="scale(1.05)";
            button.style.transition = "transform 0.1s"
            text.innerText = "Uploading...";
            
            setTimeout(()=>{
                button.classList.remove("progress..");
                text.innerText = "File Uploaded"
                button.style.transform ="scale(1)";
                button.style.background = '#7d2ae8';
            }, 4000);
        });