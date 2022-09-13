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
function changeDir() {
  document.getElementById("banner-dir").innerHTML=("$ cd article/");
}

var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("light-mode");
}