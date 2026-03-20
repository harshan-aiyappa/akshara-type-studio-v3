const textEditable = document.getElementById('text-editable');
const paragraphEditable = document.getElementById('paragraph-text-editable');

//font-size
document.getElementById('font-size').addEventListener('input', function () {
  textEditable.style.fontSize = this.value + 'px';
  document.getElementById('label-font-size').innerHTML = this.value + 'px';
}, false);


document.getElementById('paragraph-size').addEventListener('input', function () {
  paragraphEditable.style.fontSize = this.value + 'px';
  document.getElementById('label-paragraph-size').innerHTML = this.value + 'px';
}, false);


//line-height
document.getElementById('line-height').addEventListener('input', function () {
  textEditable.style.lineHeight = this.value ;
  document.getElementById('label-line-height').innerHTML = this.value;
}, false);

document.getElementById('paragraph-line-height').addEventListener('input', function () {
  paragraphEditable.style.lineHeight = this.value ;
  document.getElementById('label-paragraph-line-height').innerHTML = this.value;
}, false);


//letter-spacing
document.getElementById('letter-spacing').addEventListener('input', function () {
  textEditable.style.letterSpacing = this.value + 'px';
  document.getElementById('label-letter-spacing').innerHTML = this.value + 'px';
}, false);

//letter-spacing
document.getElementById('paragraph-letter-spacing').addEventListener('input', function () {
  paragraphEditable.style.letterSpacing = this.value + 'px';
  document.getElementById('label-paragraph-letter-spacing').innerHTML = this.value + 'px';
}, false);




//font-family
document.getElementById('font-family').addEventListener('change', function () {
  textEditable.style.fontFamily = this.value;
}, false);

document.getElementById('paragraph-font-family').addEventListener('change', function () {
  paragraphEditable.style.fontFamily = this.value;
}, false);







//text-align
document.querySelectorAll('.js-align').forEach(function (inputFontAlign) {
  inputFontAlign.addEventListener('change', function () {
    textEditable.style.textAlign = this.value;
  });
});

document.querySelectorAll('.paragraph-js-align').forEach(function (paragraphinputFontAlign) {
  paragraphinputFontAlign.addEventListener('change', function () {
    paragraphEditable.style.textAlign = this.value;
  });
});









document.addEventListener("contextmenu", (event) => {
event.preventDefault();
      });




document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide', {
    type: 'loop',
    perPage: 2,
    focus: 'center',
    autoplay: true,
    interval: 2000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: '10%',
    throttle: 300,
    breakpoints: {
      992: {
     perPage:1 ,
     padding: '5%'
      }
    } 
  }).mount();
});





