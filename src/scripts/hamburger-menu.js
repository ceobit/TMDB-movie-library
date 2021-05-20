const hamburger = document.querySelector('.hamburger-menu');
const hamburgerMenuList = document.querySelector('.navbar-pagelinks ul');
hamburger.addEventListener('click', showHam);

let clickedHamburger = false;

function showHam() {
  if (clickedHamburger == false) {
    hamburger.style.animation = '1s 1 normal rotate';
    hamburgerMenuList.style.display = 'flex';
    clickedHamburger = true;
  } else if (clickedHamburger == true) {
    hamburger.style.animation = '1s 1 normal rotateBack';
    hamburgerMenuList.style.display = 'none';
    clickedHamburger = false;
  }
}
