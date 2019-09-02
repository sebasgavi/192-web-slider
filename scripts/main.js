
function handleLoad() {
    var button = document.querySelector('button');
    var slider = document.querySelector('.slider');
    var tape = slider.querySelector('.slider__tape');
    var count = 0;
    
    var first = tape.querySelector('.slider__img');
    var newLast = document.createElement('img');
    newLast.setAttribute('src', first.getAttribute('src'));
    //newLast.setAttribute('class', first.getAttribute('class'));
    newLast.classList.add('slider__img');
    tape.append(newLast);
    
    function handleLast(){
        console.log('cambio');
        tape.classList.add('slider__tape--inactive');
        tape.style.transform = 'translate(0px, 0px)';
    }
    
    function handleClick(event) {
        count++;
    
        if(count == 1){
            tape.classList.remove('slider__tape--inactive');
        }
    
        var mov = slider.offsetWidth * -1 * count;
        tape.style.transform = 'translate(' + mov + 'px, 0px)';
        
        if(count > tape.childElementCount - 2){
            setTimeout(handleLast, 300);
            count = 0;
        }
    }
    
    button.addEventListener('click', handleClick);


    function handleScroll(event){
        var nav = document.querySelector('.mainnav');
        var height = slider.offsetHeight + 40;
        if(window.scrollY > height){
            nav.classList.add('mainnav--scrolled');
        } else {
            nav.classList.remove>('mainnav--scrolled');
        }


        var navItems = nav.querySelectorAll('.mainnav__item');
        var prevItem = null;
        for(var i = 0; i < navItems.length; i++){
            var navItem = navItems[i];
            var selector = navItem.getAttribute('href');
            var title = document.querySelector(selector);
            if(window.scrollY > title.offsetTop){
                if(prevItem){
                    prevItem.classList.remove('mainnav__item--active');
                }
                navItem.classList.add('mainnav__item--active');
                prevItem = navItem;
            } else {
                navItem.classList.remove('mainnav__item--active');
            }
        }


        //console.log(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
}

window.addEventListener('load', handleLoad);