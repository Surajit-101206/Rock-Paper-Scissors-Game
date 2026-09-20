let userscore = 0;
let compscore = 0;


const userplace = document.querySelectorAll(".choise");
const msgpanal = document.querySelector("#msg");
const userbord = document.querySelector("#userpoint");
const compbord = document.querySelector("#comppoint");
const reset = document.querySelector(".reset-btn");

const gencompchoise = () =>{
    const options = ["rock","paper","scissors"];
    const randomx = Math.floor(Math.random() * 3);
    return options[randomx];
};

const drawgame = () =>{
    console.log("game was draw");
    msg.innerText = `Game was Draw. Play again.`;
    msgpanal.style.backgroundColor = "rgb(6, 55, 98)";
};

const showwinnner = (userwin,userchoise,compchoise) => {
    if (userwin) {
        userscore++;
        userbord.innerText = userscore;
     console.log("you win");
     msg.innerText = `You Win! your ${userchoise} beats comp ${compchoise}`;
     msgpanal.style.backgroundColor = "green";
    } else {
        compscore++;
        compbord.innerText = compscore;
     console.log("you lose");
     msg.innerText = `You Lose. comp ${compchoise} beats your ${userchoise}`;
     msgpanal.style.backgroundColor = "red";
    };
};

const playgame = (userchoise) => {
    console.log("user choise", userchoise);
    const compchoise = gencompchoise();
    console.log("comp choise", compchoise);

    if(userchoise === compchoise){
        drawgame();
    }else{
        let userwin = true;
        if(userchoise === "rock"){
           userwin = compchoise === "paper"? false : true;
        }else if(userchoise === "paper"){
            userwin = compchoise === "scissors"? false : true;
        }else{
            userwin = compchoise === "rock"? false : true;   
        }   
         showwinnner(userwin,userchoise,compchoise);    
    };
};

userplace.forEach ((choise) => {
    choise.addEventListener ("click", () => {
     const userchoise = choise.getAttribute("id");
     playgame(userchoise);
    });
});

reset.addEventListener ("click", () => {
    userscore = 0;
    compscore = 0;
    userbord.innerText = "0";
    compbord.innerText = "0";
    msgpanal.innerText = "Play your move";
    msgpanal.style.backgroundColor = "rgb(6, 55, 98)";
});