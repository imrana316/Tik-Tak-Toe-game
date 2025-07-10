let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newBtn = document.getElementById("new-btn");
let resetBtn = document.getElementById("reset-btn");
let turn0 =true;
let winPatren =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0 == true){
            box.innerHTML = "0";
            turn0 = false;
            box.style.color = "red";
        }else{
            box.innerHTML = "X";
            turn0 = true;
            box.style.color = "green";
        }
        box.disabled = true;
        checkWinner();
    })
})
let checkWinner=()=>{
    for(let patren of winPatren){
        let pos1Val = boxes[patren[0]].innerText;
        let pos2Val = boxes[patren[1]].innerText;
        let pos3Val = boxes[patren[2]].innerText;
       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if( pos1Val === pos2Val && pos2Val === pos3Val){
            msg.innerHTML = `congrulation winner is ${pos1Val}`;
            msgContainer.classList.remove("hide");

        }else{
            msg.innerHTML = "Game Draw! Try again";
             msgContainer.classList.remove("hide");
            
        }
        disabled();
       }
    }
}
let disabled = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

let enabled = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML ="";
    }
}
let reset = ()=>{
    turn0 = true;
    enabled();
    msgContainer.classList.add("hide");
}
newBtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);