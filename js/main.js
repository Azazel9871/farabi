"use strict";
/*global document: false */

function getLastModifiedDate() {
    var date = new Date(document.lastModified), month = date.getMonth() + 1,
        day = date.getDate(), year = date.getFullYear();

    document.getElementById("modifiedDate").innerHTML = "Last Updated: " + day + "/" + month + "/" + year;
}

function login() {
    var user = document.getElementById("userNameField").value,
        pass = document.getElementById("passwordField").value;

    if (user === "test" && pass === "test") {
        window.location.href = "result.html";
    } else {
        if (user !== 'test') {
            alert('User name is not correct, Please use "test" as username');
            document.getElementById('userNameField').value = '';
        } else if (pass !== 'test'){
            alert('Password is not correct, Please use "test" as password.');
            document.getElementById('passwordField').value = '';
        }
    }
}

function changeInfo() {
    var button = document.getElementById('changeInfo');

    button.innerHTML = 'Done';
    button.disabled = true;
    button.className = 'mainButton';
    button.style = 'color: black;';

}

function register() {
    alert('Cannot create accounts right now, Please visit the login page and use test as username and password to login');
}


function GetClock() {
    var d = new Date();
    var nhour = d.getHours(),
        nmin = d.getMinutes(),
        nsec = d.getSeconds();
    if (nmin <= 9) {
        nmin = "0" + nmin;
    }
    if (nsec <= 9) {
        nsec = "0" + nsec;
    }

    document.getElementById('clockbox').innerHTML = "" + nhour + ":" + nmin + ":" + nsec + "";
}

function main() {
    getLastModifiedDate();
    GetClock();
    setInterval(GetClock, 1000);
}

window.onload = main();
