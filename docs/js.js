var slides=document.querySelector('.slider-items').children;
var nextslide=document.querySelector('.right');
var prevslide=document.querySelector('.left');
var totalslide=slides.length;
var index=0;

nextslide.onclick=function(){
    next('next');
};
prevslide.onclick=function(){
    next('prev');
};

function next(direction){
    if (direction=='next'){
        index++;
        if (index==slides.length){
            index=0;
        }
    }
    else{
        if (index==0){
            index=totalslide-1;
        }else{
            index--;
        }
    }
    for(i=0;i<slides.length;i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active')

    }