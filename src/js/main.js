$(document).ready(function () {
  $('.user__dots-el').click(function () {
   $('.user__menu').toggleClass('user__menu--active');
  });
  $('.user__menu-link').click(function() {
      $('.user__menu-link').removeClass('user__menu-link--active');
      $(this).addClass('user__menu-link--active');
  })
      });  
