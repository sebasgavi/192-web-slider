
var button = document.querySelector('button');
var slider = document.querySelector('.slider');
var tape = slider.querySelector('.slider__tape');
var count = 0;

function handleClick(event) {
    count++;
    if(count > tape.childElementCount - 1){
        count = 0;
    }
    var mov = slider.offsetWidth * -1 * count;
    tape.style.transform = 'translate(' + mov + 'px, 0px)';
    console.log(tape.childElementCount);
}

button.addEventListener('click', handleClick);