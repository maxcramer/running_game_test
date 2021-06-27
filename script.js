var runner = document.getElementById("runner");
var obstacle = document.getElementById("obstacle");
let counter = 0;
var score = document.getElementById("score"); 

function jump() {
    if(runner.classList != "animate") {
        runner.classList.add("animate");
    };
    setTimeout(function() {
        runner.classList.remove("animate");
        counter++;
        score.innerHTML = `SCORE: ${counter}`;
    }, 500);
};

var lose = setInterval(function() {
    var runnerTop= parseInt(window.getComputedStyle(runner).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && runnerTop >= 120) {
        obstacle.style.animation = "none";
        obstacle.style.display="none";
        alert("GAME OVER"); // change this into a modal 
    };
}, 10);


