
// Preloader

window.addEventListener('load', () => {

   document.querySelector('.js-preloader').classList.add('fade-out');
   setTimeout(() => {
      document.querySelector('.js-preloader').style.display = 'none';
   }, 600);
})

// ==========    Nav ========

const navToggle = document.querySelector('.js-nav-toggle');
const nav = document.querySelector('.js-nav');

   function navToggler(){
      nav.classList.toggle('active');
      navToggle.classList.toggle('active');
   }

navToggle.addEventListener('click', navToggler);

// Hide Nav

document.addEventListener('click', (event) => {
   const isClickInsideNav = nav.contains(event.target);
   const isClickInsideNavToggle = navToggle.contains(event.target);

   if(!(isClickInsideNav || isClickInsideNavToggle) && nav.classList.contains('active')) {
      navToggler();
   }
})

// Dark Theme

function themeLightDark() {
   const switchBtn = document.querySelector('.js-switch-btn');
   const icon = switchBtn.querySelector('i');

   function changeIcon() {
      if(document.body.classList.contains('dark')) {
         icon.classList.remove('fa-moon');
         icon.classList.add('fa-sun');
      } else {
         icon.classList.remove('fa-sun');
         icon.classList.add('fa-moon');
      }
   }

   switchBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      changeIcon();

      if(document.body.classList.contains("dark")) {
         localStorage.setItem('theme', "dark");
      } else {
         localStorage.setItem('theme', "light");
      }
   });

   // check for saved user preference, if any , on load of the websites

   if(localStorage.getItem('theme') !== null) {
      if(localStorage.getItem('theme') === 'light') {
         document.body.classList.remove('dark');
      } else {
         document.body.classList.add('dark');
      }
   }

   changeIcon();
}
themeLightDark();
