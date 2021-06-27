var runner = document.getElementById("runner");
var obstacle = document.getElementById("obstacle");
let counter = 0;
var score = document.getElementById("score").innerHTML = counter;

console.log(counter++);


function jump() {
    if(runner.classList != "animate") {
        runner.classList.add("animate");
    };
    setTimeout(function() {
        runner.classList.remove("animate");
        counter++;
    }, 500);
};

function returnScore() {
    if(counter >= 0) {
        return counter++;
    }
}

var lose = setInterval(function() {
    var runnerTop= parseInt(window.getComputedStyle(runner).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && runnerTop >= 130) {
        obstacle.style.animation = "none";
        obstacle.style.display="none";
        alert("Score: "+ counter);
        console.log(counter);
    };
}, 10);


