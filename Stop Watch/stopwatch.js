let play = document.querySelector("#play");
 
let pause = document.querySelector("#reset");

let timer = document.querySelector("#timer");

let second = 0;
let leadindSecond = 0;

let minute = 0;
let leadingMinute = 0;

let hour = 0;
let leadingHour = 0;

 
function stopWatch(){
    second++
    if (second/60===1){
        second = 0;
        minute++;

        if (minute/60 ===1){
            minute =0;
            hour++;
        }
    }
    timer.innerText = `${leadingHour}:${leadingMinute}:${leadingSecond}`;

}

play.addEventListener("click",()=>{

 
})
pause.removeEventListener("click",()=>{})
 


