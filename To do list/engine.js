let tasks=document.querySelectorAll(".task");
console.log(tasks);
console.log(tasks[1]);
let text=document.querySelector(".window");
console.log(text);
tasks.forEach((task)=>{
    task.addEventListener("click",()=>{
        task.classList.toggle("active");
        console.log("done");
    })
})

 