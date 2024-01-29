let faq = document.querySelectorAll(".content-container");
console.log(faq);
faq.forEach((text)=>{
    text.addEventListener("click",()=>{
        text.classList.toggle("active");
    })
})