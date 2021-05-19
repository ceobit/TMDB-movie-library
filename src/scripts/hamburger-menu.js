const hamburger = document.querySelector('.hamburger-container');
const hamburgerMenuList = document.querySelector('.navbar-pagelinks ul');
hamburger.addEventListener('click', showHam);

let clickedHamburger = false;

function showHam() {
  if (clickedHamburger == false) {
    hamburgerMenuList.style.display = 'flex';
    clickedHamburger = true;
  } else {
    hamburgerMenuList.style.display = 'none';
    clickedHamburger = false;
  }
}
