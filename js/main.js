var images = {
  man: {
    heading: 'Man Image',
    description: 'Image of a man.',
    path: 'images/man.jpg'
  },
  wizard: {
    heading: 'Wizard Image',
    description: 'Image of a wizard.',
    path: 'images/wizard.jpg'
  },
  beast: {
    heading: 'Beast Image',
    description: 'Image of a beast.',
    path: 'images/beast.jpg'
  }
};
var menu = document.getElementsByClassName('menu_container')[0];
var navbar = document.getElementsByClassName('navbar')[0];
var man = document.getElementById('man');
var wizard = document.getElementById('wizard');
var beast = document.getElementById('beast');
var mPic = images.man.path;
var wPic = images.wizard.path;
var bPic = images.beast.path;

// onclick function for hamburger menu
menu.onclick = function(){
  menu.classList.toggle('change');
  navbar.classList.toggle('open');
}

// set image sources
man.src = '../' + mPic;
wizard.src = '../' + wPic;
beast.src = '../' + bPic;
