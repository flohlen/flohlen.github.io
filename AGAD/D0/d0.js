if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i))) {
	document.getElementById("clock").style.transform = "rotate(270deg)";
}

function updateTime() {
	var d = new Date();
	updateClock(d.toLocaleTimeString());
}

function updateClock(time) {

	var seg0 = document.getElementById("seg0").children; 
	for (i=0; i<2; i++) {
		if (i >= 2-time[0]) {
			seg0[i].setAttribute("data-state","on");
		} else {
			seg0[i].setAttribute("data-state","off");
		}
	}

	var seg1 = document.getElementById("seg1").children; 
	for (i=0; i<9; i++) {
		if (i >= 9-time[1]) {
			seg1[i].setAttribute("data-state","on");
		} else {
			seg1[i].setAttribute("data-state","off");
		}
	}

	var seg2 = document.getElementById("seg2").children; 
	for (i=0; i<5; i++) {
		if (i >= 5-time[3]) {
			seg2[i].setAttribute("data-state","on");
		} else {
			seg2[i].setAttribute("data-state","off");
		}
	}

	var seg3 = document.getElementById("seg3").children; 
	for (i=0; i<9; i++) {
		if (i >= 9-time[4]) {
			seg3[i].setAttribute("data-state","on");
		} else {
			seg3[i].setAttribute("data-state","off");
		}
	}

	var seg4 = document.getElementById("seg4").children; 
	for (i=0; i<5; i++) {
		if (i >= 5-time[6]) {
			seg4[i].setAttribute("data-state","on");
		} else {
			seg4[i].setAttribute("data-state","off");
		}
	}
	seg5 = document.getElementById("seg5").children
	for (i=0; i<9; i++) {
		if (i >= 9-time[7]) {
			seg5[i].setAttribute("data-state","on");
		} else {
			seg5[i].setAttribute("data-state","off");
		}
	}
}

setInterval(updateTime, 1000);