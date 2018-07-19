var aboutNavBottom = document.querySelector('.about-nav-bottom');
var aboutNavTop = document.querySelector('.about-nav-top');
var aboutTitle = document.querySelector('.about-title')

aboutNavBottom.addEventListener('click', aboutFocus);
aboutNavTop.addEventListener('click', aboutFocus);



function aboutFocus() {
  aboutTitle.scrollIntoView();
}

