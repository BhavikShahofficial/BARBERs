var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");

var defaultWidth = 250;
var expandedWidth = 750;

// Function to set sidenav width based on window width
function setSidenavWidth() {
  if (window.innerWidth > 1920) {
    sidenav.style.width = expandedWidth + "px";
    if (sidenav.style.right === "0px") {
      sidenav.style.right = "-" + expandedWidth + "px";
    }
  } else {
    sidenav.style.width = defaultWidth + "px";
    if (sidenav.style.right === "0px") {
      sidenav.style.right = "-" + defaultWidth + "px";
    }
  }
}

// Initial setup
setSidenavWidth();

// Event listener for resizing
window.onresize = setSidenavWidth;

sidenav.style.right = "-" + sidenav.style.width;

menubtn.onclick = function () {
  if (sidenav.style.right === "-" + sidenav.style.width) {
    sidenav.style.right = "0";
    menu.src = "images/barber/close.png";
  } else {
    sidenav.style.right = "-" + sidenav.style.width;
    menu.src = "images/barber/menu.png";
  }
};

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});
