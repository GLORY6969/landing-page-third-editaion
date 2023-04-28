// var btn = document.querySelector(".more");
var links = document.querySelector(".links");
var icon = document.querySelector(".more .icon");

// function myFunction() {
//   links.classList.toggle("hide");
//   icon.classList.toggle("rotate");
// }

// ######################3
const first_nav = document.querySelector(".first_nav");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 525) {
		first_nav.classList.add("second_navbar");
	} else {
		first_nav.classList.remove("second_navbar");
	}
});
// #########################