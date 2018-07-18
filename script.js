var aboutNav = document.querySelector('.about-nav');
var aboutTitle = document.querySelector('.about-title')

aboutNav.addEventListener('click', aboutFocus);

function aboutFocus() {
  aboutTitle.scrollIntoView()
}
