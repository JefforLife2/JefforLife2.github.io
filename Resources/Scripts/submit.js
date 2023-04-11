function checkEmail(){
	var myForm = document.getElementById("myForm");
	var email = document.getElementById("email").value;
	var conemail = document.getElementById("conemail").value;
	
	console.log(email);
	console.log(conemail);
	
	if (email == conemail){
		myForm.submit();
	}
	else{
		alert("Email does not match!");
	}
}