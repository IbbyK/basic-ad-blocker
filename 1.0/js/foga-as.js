// FOGA-AS = Fuck Off Google Adds - Anti Stalker

// FUNCTIONS
function removcontent(){
	console.log("Starting content removal");
	var conts = document.getElementById("bnr");
	var amount = conts.length;
	console.log("Found " + amount + " bnr ID divs");
	for(var i = 0; i < amount; i++){
		conts[i].innerHTML = "BLOCKED AD";
		console.log("Removed ad content");
	}
	console.log("Finished removing content from ads!");
}
function removframs(){
	console.log("Starting removal of ad frames...");
	var frams = document.getElementsByClassName("ad_guts");
	var amount = frams.length;
	console.log("Found " + amount + " ad_guts class divs");
	for(var i = 0; i < amount; i++){
		frams[i].innerHTML = "Ad removal service";
		console.log("Removed ad frame!");
	}
	console.log("Finished removing ad frames!");
}

//MAIN
// removcontent();
removframs();
