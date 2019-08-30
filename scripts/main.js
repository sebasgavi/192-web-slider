
var button = document.querySelector('button');
var slider = document.querySelector('.slider');
var tape = slider.querySelector('.slider__tape');

function handleClick(event) {
    var mov = slider.offsetWidth * -1;
    tape.style.transform = 'translate(' + mov + 'px, 0px)';
    console.log(mov);
}

button.addEventListener('click', handleClick);