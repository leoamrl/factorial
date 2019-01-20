var menu_trigger = document.getElementById("menuTrigger");
var menu = document.getElementById("menu");
document.getElementById('menuTrigger').addEventListener('click', function () {
  if (this.classList.contains('active')) {
    menu.classList.remove('active');
    menuTrigger.classList.remove('active');
  } else {
    menu.classList.add('active');
    menuTrigger.classList.add('active');
  }
});