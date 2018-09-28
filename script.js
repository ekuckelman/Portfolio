var aboutNavTop = document.querySelector('.about-nav-top');
var aboutNavBottom = document.querySelector('.about-nav-bottom');
var aboutTitle = document.querySelector('.about-title');
var projectsNavTop = document.querySelector('.projects-nav-top');
var projectsNavBottom = document.querySelector('.projects-nav-bottom');

var projectsTitle = document.querySelector('.projects-title');

aboutNavBottom.addEventListener('click', aboutFocus);
aboutNavTop.addEventListener('click', aboutFocus);
projectsNavBottom.addEventListener('click', projectsFocus);
projectsNavTop.addEventListener('click', projectsFocus);


function aboutFocus() {
  aboutTitle.scrollIntoView();
}

function projectsFocus() {
  projectsTitle.scrollIntoView();
}

