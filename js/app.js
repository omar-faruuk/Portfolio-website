$(document).ready(function(){
    $('.slider').slick({
     arrows:false,
     dots:true,
     appendDots: '.slider-dots',
     dotsClass:'dots',
    })

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');

    hamberger.addEventListener('click',function(){
     document.querySelector('.mobile-nav').classList.add('open');
    })
    times.addEventListener('click',function(){
     document.querySelector('.mobile-nav').classList.remove('open');
    })
})