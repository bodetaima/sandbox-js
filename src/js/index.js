import '../css/index.css';

function openNavBar() {
  var x = document.getElementById('nav-items');
  if (x.className === 'nav-menu') {
    x.className += ' responsive';
  } else {
    x.className = 'nav-menu';
  }
}

window.openNavBar = openNavBar;
