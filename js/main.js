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

// save navbar elements to variables
var menu = document.getElementsByClassName('menu_container')[0];
var navbar = document.getElementsByClassName('navbar')[0];

// save picture dom objects to variables
var man = document.getElementById('man');
var wizard = document.getElementById('wizard');
var beast = document.getElementById('beast');

// save picture paths to variables
var mPic = images.man.path;
var wPic = images.wizard.path;
var bPic = images.beast.path;

// save picture headings to variables
var mHead = images.man.heading;
var wHead = images.wizard.heading;
var bHead = images.beast.heading;

// save picture descriptions to variables
var mCap = images.man.description;
var wCap = images.wizard.description;
var bCap = images.beast.description;

// save image id's from dom to variables
var dude_description = document.getElementById('dude_cap_header');
var dude_caption = document.getElementById('dude_cap_text');
var wizard_description = document.getElementById('wiz_cap_header');
var wizard_caption = document.getElementById('wiz_cap_text');
var beast_description = document.getElementById('beast_cap_header');
var beast_caption = document.getElementById('beast_cap_text');

// onclick function for hamburger menu
menu.onclick = function(){
  menu.classList.toggle('change');
  navbar.classList.toggle('open');
}

// set image sources
man.src = '../' + mPic;
wizard.src = '../' + wPic;
beast.src = '../' + bPic;

// set image headers and captions from js object
dude_description.innerHTML = mHead;
dude_caption.innerHTML = mCap;
wizard_description.innerHTML = wHead;
wizard_caption.innerHTML = wCap;
beast_description.innerHTML = bHead;
beast_caption.innerHTML = bCap;
