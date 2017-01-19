/*
var dimension = Math.floor(Math.random() * 50 + 50);
var color = getRandomColor();
var shape = getShape();
var positionTop = getPositionVertical();
var positionLeft = getPositionHorizontal();
*/

function generateFigure() {
    var dimension = Math.floor(Math.random() * 50 + 50);
    document.getElementById("figure").style.width = dimension + "px";
    document.getElementById("figure").style.height = dimension + "px";
    document.getElementById("figure").style.backgroundColor = getRandomColor();
    document.getElementById("figure").style.borderRadius = getShape();
    document.getElementById("figure").style.left = getPositionHorizontal();
    document.getElementById("figure").style.top = getPositionVertical();
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
    if (randomNumber == 0) {
        return randomNumber;
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

document.getElementById("start-button").onclick = function () {

    generateFigure();

    document.getElementById("figure").onclick = function () {
        //document.getElementById("figure").style.display = "none";
        console.log(count);
        generateFigure();
    }
}

