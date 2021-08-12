document.addEventListener("DOMContentLoaded", function() {
	var els = document.querySelectorAll(".moveable > .title");
	console.log("Found moveable " + els.length);
	var inMove = false;
	var mouseX, mouseY, elmX, elmY, divMoveable;
	
	for (var i=0; i<els.length; i++) {
		var el=els[i];
		el.addEventListener("mousedown", onMouseDown);
	}
	
	document.addEventListener("mousemove", onMouseMove);
	document.addEventListener("mouseup", onMouseUp);
	
	function onMouseDown(ev) {
		inMove = true;
		divMoveable=ev.target.parentNode;
		var elm = ev.target;
		var coords = divMoveable.getBoundingClientRect();
		elmX = coords.left;
		elmY = coords.top;
		mouseX = ev.screenX;
		mouseY = ev.screenY;
		console.log(coords);
		console.log(ev);
	}
	
	function onMouseUp(ev) {
		inMove = false;
	}
	
	function onMouseMove(ev) {
		if (inMove) {
			var deltaX = ev.screenX - mouseX;
			var deltaY = ev.screenY - mouseY;
			divMoveable.style.left = elmX + deltaX + "px";
			divMoveable.style.top = elmY + deltaY + "px";
		}
	}
});