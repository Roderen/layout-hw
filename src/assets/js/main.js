'use strict';

(function () {
  const openMainMenu = () => {
    const button = document.querySelector('.header__menu-btn');
    const menu = document.querySelector('.header-right');

    button.addEventListener('click', (e) => {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        setTimeout(() => {menu.style.display = 'none'}, 500);
      } else {
        menu.style.display = 'flex';
        setTimeout(() => {menu.classList.add('active')}, 1);
      }
    })
  }
  openMainMenu();

  const openSidebarMenu = () => {
    const button = document.querySelector('.header__sidebar-btn');
    const menu = document.querySelector('.sidebar');

    button.addEventListener('click', (e) => {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        button.classList.remove('active');
        setTimeout(() => {menu.style.display = 'none'}, 500);
      } else {
        menu.style.display = 'flex';
        setTimeout(() => {
          menu.classList.add('active');
          button.classList.add('active');
        }, 1);
      }
    })
  }
  openSidebarMenu();
})();