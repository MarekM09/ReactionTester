var startTime = Date.now();
var clickTime = 0;
var timeSum = 0;
var counter = 0;
var average = 0;
var bestAverageResult = localStorage.getItem("bestAverageResult");

function generateRandomFigure() {
    var size = Math.floor(Math.random() * 50 + 50);
    document.getElementById("figure").style.width = size + "px";
    document.getElementById("figure").style.height = size + "px";
    document.getElementById("figure").style.backgroundColor = getRandomColor();
    document.getElementById("figure").style.borderRadius = getShape();
    document.getElementById("figure").style.left = getPositionHorizontal();
    document.getElementById("figure").style.top = getPositionVertical();
    document.getElementById("figure").style.display = "block";
    startTime = Date.now()
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getShape() {
    var randomNumber = Math.floor(Math.random() * 2)
    if (Math.random() < 0.5) {
        return 0;
    } else {
        return "50%";
    }
}

function getPositionVertical() {
    var maxPosition = document.getElementsByClassName("game-board")[0].clientHeight;
    var pixelNumber = Math.floor(Math.random() * (maxPosition - 100));

    return pixelNumber + "px";
}

function getPositionHorizontal() {
    var maxPosition = document.getElementsByClassName("game-board")[0].clientWidth;
    var pixelNumber = Math.floor(Math.random() * (maxPosition - 100));

    return pixelNumber + "px";
}

function appearAfterDelay() {
    setTimeout(generateRandomFigure, Math.random() * 2000);
}

function resultsReset() {
    counter = 0;
    timeSum = 0;
    average = 0;
    clickTime = 0;
}

function displayResults() {
    document.getElementById("last-time").innerHTML = clickTime.toFixed(3);
    document.getElementById("average-time").innerHTML = average.toFixed(3);
    document.getElementById("try-number").innerHTML = counter;
    document.getElementById("best-time").innerHTML = bestAverageResult;
    document.getElementById("time-to-beat").innerHTML = bestAverageResult;
}

function hideFigure() {
    document.getElementById("figure").style.display = "none";
}

function saveBestTime(time) {

    if ((time < bestAverageResult && time != 0) || bestAverageResult == null || bestAverageResult == 0) {
        localStorage.setItem("bestAverageResult", time.toFixed(3));
        bestAverageResult = localStorage.getItem("bestAverageResult");
    }
}

document.getElementById("time-to-beat").innerHTML = bestAverageResult;

document.getElementById("start-button").onclick = function() {
    hideFigure();
    resultsReset();
    displayResults()
    document.getElementById("start-button").style.zIndex = "0";
    document.getElementById("summary").style.display = "none";
    setTimeout(generateRandomFigure, 2000);

    document.getElementById("figure").onclick = function() {
        counter++;
        clickTime = (Date.now() - startTime) / 1000;
        timeSum += clickTime;
        average = (timeSum / counter);
        displayResults();
        hideFigure();
        appearAfterDelay();
    }
}

document.getElementById("stop-button").onclick = function() {
    document.getElementById("start-button").style.zIndex = "1";
    document.getElementById("summary").style.display = "block";
    document.getElementById("rounds").innerHTML = counter;
    document.getElementById("av-time").innerHTML = average.toFixed(3);
    saveBestTime(average);
    displayResults();
    hideFigure();
}

document.getElementById("close-button").onclick = function() {
    document.getElementById("summary").style.display = "none";
    hideFigure();
}
