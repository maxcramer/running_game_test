var runner = document.getElementById("runner");
var obstacle = document.getElementById("obstacle");
var counter = 0;


function jump() {
    if(runner.classList != "animate") {
        runner.classList.add("animate");
    };
    setTimeout(function() {
        runner.classList.remove("animate");
        counter++;
    }, 500);
};

var lose = setInterval(function() {
    var runnerTop= parseInt(window.getComputedStyle(runner).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && runnerTop >= 130) {
        obstacle.style.animation = "none";
        obstacle.style.display="none";
        alert("Score: "+ counter);
        counter = 0;
    };
}, 10);