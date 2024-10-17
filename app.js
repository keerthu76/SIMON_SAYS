let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(started==false){
    started=true;
    levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}
function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);

};

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1500);
        }
    }
    else{
        h2.innerHTML=`game over! Your score was <b>${level}</b> press any key to start`;
        reset();
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150);

    }
};

function btnPress() {
   let btn=this;
   userFlash(btn);
   userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    started=false;
    gamesweq=[];
    userseq=[];
    level=0;
};