"use strict";

window.onload = function () {

    let outputscreen = document.getElementById("output");

    let opelem = document.querySelectorAll(".numpads");

    let len = opelem.length;

    let isCurrentResult = false;

    for (let i = 0; i < len; i++) {
        opelem[i].addEventListener("click", function () {
            if (isCurrentResult === true) {
                outputscreen.innerHTML = "";
                isCurrentResult = false;
                console.log("hey i'm here");
            }
            let num = this.value;
            let output = outputscreen.innerHTML += num;
            console.log(isCurrentResult);
        }, false);
    }

    document.getElementById("clearbutton").addEventListener("click", function () {
        outputscreen.innerHTML = "";
    })

    document.getElementById("plus").addEventListener("click", function () {
        outputscreen.innerHTML += "+";
        if (isCurrentResult) {
            console.log("plus is working");
        }
    })

    document.getElementById("minus").addEventListener("click", function () {
        outputscreen.innerHTML += "-";
    })

    document.getElementById("times").addEventListener("click", function () {
        outputscreen.innerHTML += "*";
    })

    document.getElementById("divide").addEventListener("click", function () {
        outputscreen.innerHTML += "/";
    })

    document.getElementById("equals").addEventListener("click", function () {
        isCurrentResult = true;
        outputscreen.innerHTML = eval(outputscreen.innerHTML);
        console.log(isCurrentResult);
    })

    document.getElementById("lilbutton").addEventListener("click", function () {
        pass;
}
