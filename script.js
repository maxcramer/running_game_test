var runner = document.getElementById("runner");
var obstacle = document.getElementById("obstacle");
let counter = 0;
var score = document.getElementById("score")

console.log(counter++);


function jump() {
    if(runner.classList != "animate") {
        runner.classList.add("animate");
    };
    setTimeout(function() {
        runner.classList.remove("animate");
        counter++;
        console.log(counter);

        // score.innerHTML(counter)
    }, 500);
};


var lose = setInterval(function() {
    var runnerTop= parseInt(window.getComputedStyle(runner).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && runnerTop >= 130) {
        obstacle.style.animation = "none";
        obstacle.style.display="none";
        alert("Score: "+ counter);
        console.log(counter);
        counter = 0;
    };
}, 10);


