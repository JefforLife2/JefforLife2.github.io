// Songs
const songs = {
	1: '../Resources/Audio/mario.mp3',
	2: '../Resources/Audio/pigstep.wav',
	3: '../Resources/Audio/bonetrousle.wav',
	4: '../Resources/Audio/coconut_mall.mp3',
	5: '../Resources/Audio/wii_sports_boxing.wav',
	6: '../Resources/Audio/wii_sports.wav',
	7: '../Resources/Audio/california_girls.mp3'
}

// Setup
var hasClickedJukebox = false;
var audio = new Audio(songs[1]);
var trackNumber = 0
var waitForChad
var doorclose = new Audio('../Resources/Audio/door_close.mp3');




// Bighead man leaves
function bigheadManLeave(){
	const bigheadMan = document.getElementById("BigheadMan");
	
	bigheadMan.remove();
	doorclose.play();
}

// When jukebox clicked
function jukebox(x){
	
	// Get the chads
	const chads = document.getElementById("chads");
	const chads2 = document.getElementById("chads2");
	const chads3 = document.getElementById("chads3");
	
	// Change tracks
	trackNumber += 1
	
	if (trackNumber > 7) {
		trackNumber = 1
	}
	
	// Play nect song
	if (hasClickedJukebox == true) {
		audio.pause();
	}
	
	audio = new Audio(songs[trackNumber]);
	audio.loop = true;
	audio.play();
	
	// Chad kensington time
	if(waitForChad){
		clearTimeout(waitForChad);
		waitForChad = null;
	}
	
	waitForChad = setTimeout(function(){
			chads.style.display = "block";
			document.title = "chad kensington?";
			x.src = "../Resources/Images/Basement/jukeboxFire.webp";
			
			setTimeout(function(){
				chads2.style.display = "block";
				document.title = "CHAD kensington!!!!!";
				
				bigheadManLeave();
				
				setTimeout(function(){
					chads3.style.display = "block";
					document.title = "CHAD KENSINGTON";
				}, 69000)
			}, 61500)
		}, 54000);
		
	if (trackNumber != 7) {
		clearTimeout(waitForChad);
	}
	
	// Is there gonna be some partygoers?
	const partygoers = document.getElementById("partygoers");
	
	var roll = Math.floor(Math.random() * 100);
	
	if (roll == 0) {
		
		console.log("burger");
		audio.pause();
		
		audio = new Audio('../Resources/Audio/partygoer.mp3');
		audio.loop = true;
		audio.play();
		
		partygoers.style.display = "block";
		
		bigheadManLeave();
		
		clearTimeout(waitForChad);
		
		x.onclick = null;
	}
	
	// Finish
	hasClickedJukebox = true;
}