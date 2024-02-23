let gameseq=[];
let userseq=[];

let btns = ["yellow","red","purple","green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(start == false){
       console.log("game started");
       start == true;

       levelup();
   }
});

function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
   btn.classList.remove("flash");
},250);
}

function userbtnflash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
       btn.classList.remove("userflash");
   },250);
   }

function levelup(){
   userseq = [];
   level++;
   h2.innerText = `Level ${level}`;


   let rndind = Math.floor(Math.random()*3);
   let rndclr = btns[rndind];
   let rndbtn = document.querySelector(`.${rndclr}`);
   // console.log(rndind);
   // console.log(rndclr);
   // console.log(rndbtn);
   gameseq.push(rndclr);
   console.log(gameseq);
   gameflash(rndbtn);
}

function checkans(idx){
   if(userseq[idx] === gameseq[idx]){
       if(userseq.length == gameseq.length){
           setTimeout(levelup,1000);
       }
   }else{
       h2.innerHTML = `Game is over! Your score was <b>${level}</b> <br> Press any key to start.`;
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
           document.querySelector("body").style.backgroundColor = "white";
       },150);
       reset();
   }
}


function btnpress(){
   let btn = this;
   userbtnflash(btn);

   usercolor = btn.getAttribute("id"); 
   userseq.push(usercolor);
   checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
   btn.addEventListener("click",btnpress);
}

function reset(){
   started = false;
   gameseq = [];
   userseq = [];
   level = 0;
}