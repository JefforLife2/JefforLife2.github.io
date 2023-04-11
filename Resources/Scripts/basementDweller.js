console.log("cheeseburger");
let userHasClicked = false; 

window.onclick = (e) => { 

	// Only allow the first click
	if (userHasClicked == false) {
		userHasClicked = true;
		
		// Into the basement
		const basementInside = document.getElementById("basementInside");
		basementInside.style.display = "block";
		
		document.body.style.backgroundImage = "url('../Resources/Images/Basement/basement.jpg')";
		document.title = "Have some rest";
	}
}