jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 10;
      mouseY = e.pageY - 10; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/3);
      yp += ((mouseY - yp)/6);
      $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 20);
  });

window.onload = function() {
  $('.button_container').click(function() {
    $('.button_container').toggleClass('active');
    $('.header__nav').toggleClass('open');
  });
};
// Slick slider

const slider = $('.gallery__slider');
    slider.slick({
      responsive:true,
      infinite: true,
      dots: false,
      speed:80,
      fade:true,
      arrows: true,
      draggable: true,
      prevArrow: $('.gallery__prev'),
      nextArrow: $('.gallery__next'),
      slidesToShow: 1
    });
    changeSlide();
    slider.on('afterChange', changeSlide);

    function changeSlide(){
      const current = $('.gallery__slider .slick-current');
      var prevImg = current.prev().find('img').attr('src') || current.siblings('[data-slick-index]:last').find('img').attr('src');
      var nextImg = current.next().find('img').attr('src') || current.siblings('[data-slick-index]:first').find('img').attr('src');
      const btnPrev = $('.gallery__prev');
      const btnNext = $('.gallery__next');
      btnPrev.addClass('clip'); setTimeout(function(){ btnPrev.css('background-image', 'url(' + prevImg + ')')},500);
      btnNext.addClass('clip'); setTimeout(function(){ btnNext.css('background-image', 'url(' + nextImg + ')')},500);
      setTimeout(function(){$('.gallery__prev, .gallery__next').removeClass('clip')},980);
    };
   
const leftBox = document.getElementById('one');
const rightBox = document.getElementById('two');
const leftBox1 = document.getElementById('three');
const rightBox1 = document.getElementById('four');

function changeClass(boxOne, boxTwo, boxThree, boxFour) {
  boxOne.addEventListener('mouseover', function () {
    boxTwo.classList.toggle('pasive');
    boxThree.classList.toggle('pasive');
    boxFour.classList.toggle('pasive');
  });
  boxOne.addEventListener('mouseout', function () {
    boxTwo.classList.remove('pasive');
    boxThree.classList.remove('pasive');
    boxFour.classList.remove('pasive');
  });
}

changeClass(leftBox, rightBox, leftBox1, rightBox1);
changeClass(rightBox, leftBox, rightBox1, leftBox1);
changeClass(leftBox1, leftBox, rightBox1, rightBox);
changeClass(rightBox1, leftBox, leftBox1, rightBox);

function slowScroll(id) {
  let offset = 0;
  $('html, body').animate({
     scrollTop: $(id).offset().top - offset
  }, 1500);
  return false;
}

