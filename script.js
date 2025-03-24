//your JS code here. If required.
function getLevel(){
	let element = document.querySelector("#level");

	let level = 1;
	while(element.parentNode){
		level++;
		element = element.parentNode;
	}

	alert(`The level of the element is: ${level-1}`);
}

getLevel();