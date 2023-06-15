var darkModeBtn = document.querySelector('.switch');
var bodyElement = document.body;
var containerElement = document.querySelector('main')
var mode = localStorage.getItem('mode');
var cardDescription = document.querySelectorAll('.card-reveal');
// var cardDescription = Array.from.querySelector('.card-reveal')

function toggleMode () {
    console.log('yes');
    bodyElement.classList.toggle('dark-mode');
    containerElement.classList.toggle('dark-mode');

    if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        darkModeBtn.textContent= 'Turn on Light Mode';
        darkModeBtn.style.backgroundColor = "white";

       for (var i = 0; i < cardDescription.length; i++) {
        cardDescription[i].style.color = "black";
       }

    } else {
        localStorage.setItem('mode', 'light');
        darkModeBtn.textContent= 'Turn on Dark Mode';
        darkModeBtn.style.backgroundColor = "white";
    }
}




darkModeBtn.addEventListener('click', toggleMode);

