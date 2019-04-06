(() => {

	
	
	console.log("fired");

	var button = document.querySelector("#button");
	var navCon = document.querySelector("#navCon");

	function hamMenu() {
		navCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamMenu, false);

})();