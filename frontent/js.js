function createbubble(){
    var clutter = "";
    for( var i=1; i<=161; i++){
        var me = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${me}</div>`;
    }
    document.querySelector("#btmpanel").innerHTML = clutter;
}
var timing = 60;
function timer(){
    var timeint = setInterval(function(){
        if(timing>0){
            timing--;
            document.querySelector('#time').textContent = timing;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#btmpanel").innerHTML = `<h1>Game over</h1>`;
            var click = new Audio("Thug life.mp3");
        click.play();
        }
    },1000)
}
var score = 0
function changescore(){
    score+=10;
    document.querySelector("#chscore").textContent = score;
    var click = new Audio("Money sound.mp3");
        click.play();
}

function hitnum(){
    document.querySelector("#btmpanel").addEventListener("click",function(dets){
        var num = Number(dets.target.textContent)
        var click = new Audio("Mouse Click.mp3");
        click.play();
        if(num == hits){
            changescore();
            createbubble();
            hit();
        }

    })
}
var hits;
function hit(){
    hits= Math.floor(Math.random()*10);
    document.querySelector("#hitrn").textContent  = hits
}
createbubble();
timer();
changescore();
hitnum();
hit();

const logout = document.getElementById("logout-btn");
const signin = document.getElementById("signin-btn");
const login = document.getElementById("login-btn");
const main = document.getElementById("btmpanel");

if(localStorage.getItem("logged"))
{   main.style.display = "flex"
    login.style.display = "none";
    signin.style.display = "none";
    logout.style.display = "inline";
}
else
{   main.style.display = "none";
    login.style.display = "inline";
    signin.style.display = "inline";
    logout.style.display = "none";
}

logout.addEventListener("click", () => {
    const value = document.getElementById("chscore");
        const avalue = value.innerHTML;
        alert(avalue);
    localStorage.removeItem("logged");
    const email = localStorage.getItem("email");
    let score = avalue;
    let scores = localStorage.getItem("scores");
    if(scores)
    {
        scores = JSON.parse(scores);
        if(scores[email]< score){
        scores[email] = score;
        }
        alert(`your higest score ${score[email]}`);
        localStorage.setItem("scores", JSON.stringify(scores));
    }
    else
    {   
        let scores = {};
        scores[email] = avalue;
        alert(`your score is ${avalue}`);
        localStorage.setItem("scores", JSON.stringify(scores));
    }
    localStorage.removeItem("email");
    location.reload();
});