// Filter Js
$(document).ready(function(){
  $('.filter-item').click(function(){
    const value = $(this).attr('data-filter');
    if (value =='all') {
      $('.post-box').show('1000');
    }
    else {
      $('.post-box').not('.' + value).hide('1000');
      $('.post-box').filter('.' + value).show('1000');
    }
  });
  //Add active to btn
  $('.filter-item').click(function() {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});
//Header background changes on scroll
/*let header = document.querySelector("header");

window.addEventListener('scroll', () => {
  header.classList.toggle("show-dir", window.scrollY > 50);
})*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})