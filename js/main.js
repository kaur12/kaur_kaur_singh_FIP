(() => {

	
	
	console.log("fired");

	var button = document.querySelector("#button");
	var navCon = document.querySelector("#navCon");
	// var lightboxBG = document.querySelector("#lightboxBG");
	// var lightbox1 = document.querySelector("#lightbox1");

	function hamMenu() {
		navCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	// function showLightBox() {
	// 	lightboxBG.style.display = "block";
	// 	lightbox1.style.display = "block";
	// }

	button.addEventListener("click", hamMenu, false);
	// lb1.addEventListener("click", showLightBox, false);

})();