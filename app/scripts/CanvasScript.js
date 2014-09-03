window.onload = function(){
	draw();
}

function draw(){
	var canvas = document.getElementById('mycanvas');
	if(!canvas || !canvas.getContext){
		return false;
	}
	var ctx = canvas.getContext('2d');

	ctx.strokeRect(10,10,50,50);
}