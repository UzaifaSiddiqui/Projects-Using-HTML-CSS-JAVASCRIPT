let lists = document.querySelectorAll(".list");
let rightBox = document.querySelector(".right-box");
let leftBox = document.querySelector(".left-box");

lists.forEach((list)=>{
    list.addEventListener("dragstart",(e)=>{
        let select = e.target;

        rightBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        })
        rightBox.addEventListener("drop",(e)=>{
            rightBox.appendChild(select);
            select =null;
        })
        leftBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        })
        leftBox.addEventListener("drop",(e)=>{
            leftBox.appendChild(select);
            select =null;
        })
    })
})