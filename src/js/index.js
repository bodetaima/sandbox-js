import '../css/index.css';
import webpackHeadingImage from '../../assets/images/webpack-illustration-2.png';

function openNavBar() {
  let x = document.getElementById('nav-items');
  if (x.className === 'nav-menu') {
    x.className += ' responsive';
  } else {
    x.className = 'nav-menu';
  }
}

document.getElementById('lg-heading-image').src = webpackHeadingImage;
document.getElementById('sm-heading-image').src = webpackHeadingImage;

let getStartedButton = document.getElementById('get-started-button');
let docsButton = document.getElementById('docs-button');

setTimeout(() => {
  getStartedButton.classList.remove('hidden');
}, 100);

setTimeout(() => {
  docsButton.classList.remove('hidden');
}, 200);

window.openNavBar = openNavBar;
