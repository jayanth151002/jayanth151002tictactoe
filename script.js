var cIndex = 0;
var check = [0, 0, 0, 0, 0, 0, 0, 0, 0]
function tictactoe(obj) {
    var element = String(obj.value);
    if (document.getElementById(element).innerHTML == "") {
        document.getElementById(element).innerHTML = "X";
        if (winCheck())
            return;
        check[Number(element) - 1] = 1;
        for (var i = 0; i < 9; i++)
            if (check[i] == 0) {
                cGenerate();
                break;
            }
    }
    winCheck();
}
function cGenerate() {
    var flag = 0;
    while (!flag) {
        cIndex = String(Math.floor((Math.random() * 9 + 1)));
        console.log(cIndex);
        if (document.getElementById(cIndex).innerHTML == "") {
            document.getElementById(cIndex).innerHTML = "O";
            check[Number(cIndex) - 1] = 1;
            flag = 1;
        }
    }
}
function winFormat(a, b, c, color) {
    document.getElementById(a).style.color = color;
    document.getElementById(b).style.color = color;
    document.getElementById(c).style.color = color;
    document.getElementById(a).style.backgroundColor = "rgb(255, 244, 142)";
    document.getElementById(b).style.backgroundColor = "rgb(255, 244, 142)";
    document.getElementById(c).style.backgroundColor = "rgb(255, 244, 142)";
}
function deactivate() {
    for (var i = 1; i <= 9; i++)
        document.getElementById(String(i)).disabled = true;
}
function win() {
    document.getElementById("winorlose").innerHTML = "CONGRATULATIONS!! YOU WON...";
    document.getElementById("click").style.visibility = "visible";
}
function lose() {
    document.getElementById("winorlose").innerHTML = "YOU LOST...TRY AGAIN!";
    document.getElementById("click").style.visibility = "visible";
}
function draw() {
    document.getElementById("winorlose").innerHTML = "IT'S A DRAW";
    document.getElementById("click").style.visibility = "visible";
    for (var i = 1; i <= 9; i++)
        document.getElementById(String(i)).style.color = "blue"
}
function drawCheck() {
    var c = 0;
    for (var i = 1; i <= 9; i++)
        if (document.getElementById(String(i)).innerHTML == "X" || document.getElementById(String(i)).innerHTML == "O")
            c++;
    if (c == 9)
        return true;
    else
        return false;
}
function winCheck() {
    if (document.getElementById("1").innerHTML == "X" && document.getElementById("2").innerHTML == "X" && document.getElementById("3").innerHTML == "X") {
        winFormat("1", "2", "3", "green");
        deactivate();
        win();
        return true;
    }
    else if (document.getElementById("4").innerHTML == "X" && document.getElementById("5").innerHTML == "X" && document.getElementById("6").innerHTML == "X") {
        winFormat("4", "5", "6", "green");
        deactivate();
        win();
        return true;
    }
    else if (document.getElementById("7").innerHTML == "X" && document.getElementById("8").innerHTML == "X" && document.getElementById("9").innerHTML == "X") {
        winFormat("7", "8", "9", "green");
        deactivate();
        win();
        return true;
    }
    else if (document.getElementById("1").innerHTML == "X" && document.getElementById("4").innerHTML == "X" && document.getElementById("7").innerHTML == "X") {
        winFormat("1", "4", "7", "green");
        deactivate();
        win();
        return true;
    }
    else if (document.getElementById("2").innerHTML == "X" && document.getElementById("5").innerHTML == "X" && document.getElementById("8").innerHTML == "X") {
        winFormat("2", "5", "8", "green");
        deactivate();
        win();
        return true;
    }
    else if (document.getElementById("3").innerHTML == "X" && document.getElementById("6").innerHTML == "X" && document.getElementById("9").innerHTML == "X") {
        winFormat("3", "6", "9", "green");
        deactivate();
        win();
        return true;
    }
    else if (document.getElementById("1").innerHTML == "X" && document.getElementById("5").innerHTML == "X" && document.getElementById("9").innerHTML == "X") {
        winFormat("1", "5", "9", "green");
        deactivate();
        win();
        return true;
    }
    else if (document.getElementById("3").innerHTML == "X" && document.getElementById("5").innerHTML == "X" && document.getElementById("7").innerHTML == "X") {
        winFormat("3", "5", "7", "green");
        deactivate();
        win();
        return true;
    }
    if (document.getElementById("1").innerHTML == "O" && document.getElementById("2").innerHTML == "O" && document.getElementById("3").innerHTML == "O") {
        winFormat("1", "2", "3", "red");
        deactivate();
        lose();
        return false;
    }
    else if (document.getElementById("4").innerHTML == "O" && document.getElementById("5").innerHTML == "O" && document.getElementById("6").innerHTML == "O") {
        winFormat("4", "5", "6", "red");
        deactivate();
        lose();
        return false;
    }
    else if (document.getElementById("7").innerHTML == "O" && document.getElementById("8").innerHTML == "O" && document.getElementById("9").innerHTML == "O") {
        winFormat("7", "8", "9", "red");
        deactivate();
        lose();
        return false;
    }
    else if (document.getElementById("1").innerHTML == "O" && document.getElementById("4").innerHTML == "O" && document.getElementById("7").innerHTML == "O") {
        winFormat("1", "4", "7", "red");
        deactivate();
        lose();
        return false;
    }
    else if (document.getElementById("2").innerHTML == "O" && document.getElementById("5").innerHTML == "O" && document.getElementById("8").innerHTML == "O") {
        winFormat("2", "5", "8", "red");
        deactivate();
        lose();
        return false;
    }
    else if (document.getElementById("3").innerHTML == "O" && document.getElementById("6").innerHTML == "O" && document.getElementById("9").innerHTML == "O") {
        winFormat("3", "6", "9", "red");
        deactivate();
        lose();
        return false;
    }
    else if (document.getElementById("1").innerHTML == "O" && document.getElementById("5").innerHTML == "O" && document.getElementById("9").innerHTML == "O") {
        winFormat("1", "5", "9", "red");
        deactivate();
        lose();
        return false;
    }
    else if (document.getElementById("3").innerHTML == "O" && document.getElementById("5").innerHTML == "O" && document.getElementById("7").innerHTML == "O") {
        winFormat("3", "5", "7", "red");
        deactivate();
        lose();
        return false;
    }
    else {
        if (drawCheck()) {
            draw();
            deactivate();
        }
    }
}