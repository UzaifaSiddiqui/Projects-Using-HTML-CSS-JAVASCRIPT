
let screen = document.querySelector("p");
console.log(screen.innerText);

let visible = ()=>{
    if (screen.innerText === "screen"){
        screen.style.visibility = "hidden";
    }
    else{
        screen.style.visibility ="visible";
    }
}

let display =(record)=>{
    if (record === "="){
        evaluate();
    }
    if (record===("Del")){
        screen.innerText = "screen";
    }else{
        if (screen.innerText !== "screen" && record !== "="){
            let keep = screen.innerText + record;
            screen.innerText = keep;
        }else if(record !=="="){
            screen.innerText = record;
        }  
    }
}
let evaluate =()=>{
    let operand = screen.innerText;
    screen.innerText = String(eval(operand));

}

let numbers = document.querySelectorAll(".digits");
console.log(numbers);
numbers.forEach((number)=>{
    console.log(number);
    number.addEventListener("click",()=>{
        console.log(number.innerText);
        display(number.innerText);
        visible();
    })
})

let operator = document.querySelectorAll(".operator");
operator.forEach((operation)=>{
    operation.addEventListener("click",()=>{
        console.log(operation.innerText);
        display(operation.innerText);
        visible();
    })
})

let method = document.querySelectorAll(".method");
method.forEach((method)=>{
    method.addEventListener("click",()=>{
        console.log(method.innerText);
        display(method.innerText);
        visible();
    })
})

