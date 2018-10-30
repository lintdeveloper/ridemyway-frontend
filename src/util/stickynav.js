const loadSideBar = () => {
  const btns = Array.from(document.getElementsByClassName('js__navbar__toggler'));
  const navBarCollaspe = document.querySelector('.navbar__collapse');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (navBarCollaspe.style.display === 'none') {
        navBarCollaspe.style.display = 'block';
      } else {
        navBarCollaspe.style.display = 'none';
      }
    });
  });
};

const stickyNav = () => {
  // Get the navbar
  const navbar = document.querySelector('nav');
  // Get the offset position of the navbar
  const sticky = 1;

  // When the user scrolls the page, execute myFunction
  window.onscroll = () => ((window.pageYOffset >= sticky) ? navbar.classList.add('sticky') : navbar.classList.remove('sticky'));
};

export { loadSideBar, stickyNav };
