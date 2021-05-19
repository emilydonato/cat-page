
let kittenQuotes = ['If cats could talk, they wouldn\'t.',
'What greater gift than the love of a cat.',
'As every cat owner knows, nobody owns a cat.',
'Cats leave paw prints in your heart, forever and always.',
'In ancient time, cats were worshipped as Gods, they have not forgotten this.',
'Cats are absolute individuals, with their own ideas about everything, including the people they own.',
'A cat\'s purr is the sound of love.',
'Cats choose us, we don\'t choose them.',
'Cats have it all: admiration, and endless sleep, and company only when they want it.',
'A meow massages the heart.'
]
let button = document.getElementById('game');
let luckyNum = document.getElementById('luckyNum');
function randomNum() {
    return Math.floor(Math.random() * 10);
}
function showNum(event) {
    luckyNum.innerHTML = 'Today your lucky number is: ' + randomNum() + '<br>' + kittenQuotes[randomNum()];
    event.target.removeEventListener('click',showNum);
    event.target.innerHTML = 'Don\'t fur-get to come back tomorrow!'
}
button.addEventListener('click', showNum);