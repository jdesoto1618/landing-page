var images = {
  man: {
    heading: 'Man Image',
    description: 'Image of a man',
    path: '../images/man.jpg'
  },
  wizard: {
    heading: 'Wizard Image',
    description: 'Image of a wizard',
    path: '../images/wizard.jpg'
  },
  beast: {
    heading: 'Beast Image',
    description: 'Image of a beast',
    path: '../images/beast.jpg'
  }
};

// save navbar elements to variables
var menu = document.getElementsByClassName('menu_container')[0];
var navbar = document.getElementsByClassName('navbar')[0];

// onclick function for hamburger menu
menu.onclick = function(){
  menu.classList.toggle('change');
  navbar.classList.toggle('open');
}

// save container div for images to a var
var img_container = document.getElementById('img_container');
// initiate object key variable outside for loop
var key;
// loop through object to get the properties needed
for(key in images) {
  // save image headings to a variable
  var heading     = images[key].heading;
  // save image descriptions to a variable
  var description = images[key].description;
  // save image paths to a variable
  var path        = images[key].path;
  // create html elements, place object properties there. += supports multiple images
  img_container.innerHTML +=
    "<div class='img_div'>" +
      "<img class='imgs' src=" + path + ">" +
      "<h3>" + heading + "</h3>" +
      "<p>" + description + "</p>" +
    "</div>";
} // ends for loop
