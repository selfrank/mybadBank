import $ from 'jquery';


var activeNavItem = $('.nav-item');

activeNavItem(function(){
  activeNavItem.removeClass('active');
  $(this).addClass('active');  
});

