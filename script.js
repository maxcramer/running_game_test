var runner = document.getElementById("runner");
var obstacle = document.getElementById("obstacle");
var counter = 0;


function jump() {
    if(runner.classList != "animate") {
        runner.classList.add("animate")
    }
    setTimeout(function() {
        runner.classList.remove("animate")
        counter++
    }, 500)
}

var lose = setInterval(function() {
    runnerTop= parseInt(window.getComputedStyle(runner).getPropertyValue("top"))
}, 10)