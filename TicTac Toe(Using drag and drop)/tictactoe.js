let crosses = document.querySelectorAll(".cross");
let fields = document.querySelectorAll(".field");
for (let i =0 ; i<crosses.length;i++){
    console.log(crosses[i].id);
}

let filled =[]
let select;

crosses.forEach((cross)=>{
    cross.addEventListener("dragstart",(e)=>{
        select = cross;
        select.style.border = "0";
        console.log(select);
        fields.forEach((field)=>{
            field.addEventListener("dragover",(e)=>{
                if (filled.includes(field.id)){
                    console.log("field already used");
                }else{
                    e.preventDefault();
                }

            })
            field.addEventListener("drop",(e)=>{
                if (filled.includes(field.id)){
                    console.log("cannot append here")
                }else{
                    console.log(select,"hello");
                    field.appendChild(select);
                    select.style.margin = "0"; 
                    filled.push(field.id);
                    console.log(filled);
                    select = null;
                }
            })
        })
    })
})
