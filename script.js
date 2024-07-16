document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('main-nav');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.style.backgroundColor = '#555';
      } else {
        nav.style.backgroundColor = '#333';
      }
    });
  
    var menuItems = nav.getElementsByTagName('a');
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('mouseenter', function() {
        this.style.color = '#ff7f50'; // Change text color on hover
      });
  
      menuItems[i].addEventListener('mouseleave', function() {
        this.style.color = '#fff'; // Change back to original text color
      });
    }
  });