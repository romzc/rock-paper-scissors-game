var items = ['rock','paper', 'scissors'];

function getRandomNumber( min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
    game function: user is a string.
*/
function game( user ) {
    var _computer = getRandomNumber(0,2);
    var _item = items[_computer];

    switch(true) {
        case ( _item === user ) :
            document.getElementById('result').innerHTML = " CPU " + _item + " DRAW";
            break;

        case ( _item === 'rock' && user =='paper'):
            document.getElementById('result').innerHTML = " CPU " + _item + " YOU WON";
            renderScore('user-score');
            break;

        case ( _item === 'rock' && user == 'scissors') :
            document.getElementById('result').innerHTML = " CPU " + _item + " YOU LOSE";
            renderScore('cpu-score');
            break;

        case ( _item === 'paper' && user == 'scissors') :
            document.getElementById('result').innerHTML = " CPU " + _item + " YOU WON";
            renderScore('user-score');
            break;

        case ( _item === 'paper' && user == 'rock') :
            document.getElementById('result').innerHTML = " CPU " + _item + " YOU LOSE";
            renderScore('cpu-score');
            break;

        case ( _item === 'scissors' && user == 'rock') :
            document.getElementById('result').innerHTML = " CPU " + _item + " YOU WON";
            renderScore('user-score');
            break;

        case ( _item === 'scissors' && user == 'paper') :
            document.getElementById('result').innerHTML = " CPU " + _item + " YOU LOSE"
            renderScore('cpu-score');
            break;
    }
}

function renderScore(id) {
    var element = document.getElementById(id).textContent;
    var result = Number(element);
    result++;
    document.getElementById(id).innerHTML = String(result);
}