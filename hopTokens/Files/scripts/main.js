

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menuOptions = document.querySelector('.menu__navigation__sideoptions');
  
    menuButton.addEventListener('click', function () {
      menuOptions.classList.toggle('active');
    });
  });
  