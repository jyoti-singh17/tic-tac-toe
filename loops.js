let boxes = document.querySelectorAll ("#box");
let reset = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let  msg = document.querySelector("#msg");
let  msgcontainer = document.querySelector(".wincontainer");
let turno =true;
const winpattern =[
    [0,1,2],
    [0,4,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame = ()=>{
    turno = true;
    msgcontainer.classList.add("hide");
    enableboxes();
};

 boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turno){
        // box.Style.color ="blue";
        box.innerText ="o";
        box.style.color ="red";
        
        turno = false;
        }
        
        else{
        box.innerText ="x";
        turno = true;
       
        }
        box.disabled = true; 
        checkWinner();
    });
});
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        innerHTML = "";
    }
};

const showwinner = (winner)=>{
    msg.innerHTML =`congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
;}
const checkWinner = ()=>{
    for(let pattern of winpattern){
        
            let pos1= boxes[pattern[0]].innerText; 
            let pos2= boxes[pattern[1]].innerText;
            let pos3= boxes[pattern[2]].innerText;
            if(pos1!= "" && pos2!= "" && pos3!= ""){
                if(pos1 === pos2 && pos2 === pos3){
                showwinner(pos1);
                }
            }
        }
    };

// reset.addEventListener("click",resetGame);
// newbtn.addEventListener("click",resetGame);
function reset11(){
    document.location.href="index.html";
}
