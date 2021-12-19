function content01_on() {
	document.getElementById("overlay01").style.display = "block";
}
  
function content01_off() {
	document.getElementById("overlay01").style.display = "none";
}


function content02_on() {
	document.getElementById("overlay02").style.display = "block";
}
  
function content02_off() {
	document.getElementById("overlay02").style.display = "none";
}


var count = 1;
    function change(btn, color) {
        var property = document.getElementById(btn);
        if (count == 0) {
            property.style.backgroundColor = "#FFFFFF"
			property.style.color = "#707070"
			property.value = "follow"
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#5e7d5e"
			property.style.color = "#FFFFFF"
			property.value = "unfollow"
            count = 0;
        }
	}