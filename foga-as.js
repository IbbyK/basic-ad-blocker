// FOGA-AS = Fuck Off Google Adds - Anti Stalker

// FUNCTIONS
function removcontent(){
	console.log("Starting content removal");
	var[] conts = document.getElementById("bnr");
	console.log("Found " + conts.length + " bnr ID divs");
	for(var i = 0; i < conts.length; i++){
		conts[i].innerHTML = "BLOCKED AD";
		console.log("Removed ad content");
	}
	console.log("Finished removing content from ads!");
}
function removframs(){
	console.log("Starting removal of ad frames...");
	var[] frams = document.getElementByClassName("ad_guts");
	console.log("Found " + conts.length + " ad_guts class divs");
	for(var i = 0; i < conts.length; i++){
		frams[i].innerHTML = "Ad removal service";
		console.log("Removed ad frame!");
	}
	console.log("Finished removing ad frames!");
}

//MAIN
removcontent();
removframs();
