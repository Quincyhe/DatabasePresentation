var canvas, stage, exportRoot;

// This function creates easel.js objects(Which may occupies lots of memories)
function initCanvasCartesianJoin() {
	//var cvs = document.getElementById("cartesianjoincvs");
	//var cxt = cvs.getContext("2d");
	
	// WHAT THE HELL? IF I SET THE WIDTH OF THE CANVAS FIRST.
	// THE HEIGHT WILL MESS UP...
	//alert(Reveal.getScale());
	//cxt.canvas.height = cvs.offsetHeight *　Reveal.getScale();
	//cxt.canvas.width = cvs.offsetWidth *　Reveal.getScale();
	//cxt.fillStyle = "#ff0000";
	//cxt.fillRect(0, 0, cvs.width, cvs.height);
	//cxt.fillStyle = "#00ff00";
	//cxt.beginPath();
	//cxt.arc(cvs.width / 2, cvs.height / 2, cvs.height / 2, 0, Math.PI * 2);
	//cxt.fill();
	
	canvas = document.getElementById("cartesianjoincvs");
	exportRoot = new lib.cartesianjoin();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

function resizeStageCartesianJoin() {
	var cxt = canvas.getContext("2d");
	// THE CANVAS IS SCALED ANYWAY...BECAUSE OF THIS DAMN JS LIBRARY.
	cxt.canvas.height = canvas.offsetHeight * Reveal.getScale();
	cxt.canvas.width = canvas.offsetWidth * Reveal.getScale();
	stage.scaleX = canvas.width / 960;
	stage.scaleY = canvas.height / 602;
	stage.update();
}

function clearStageCartesianJoin() {
	stage.removeAllChildren();
	stage = null;
	exportRoot = null;
	canvas = null;
}

Reveal.addEventListener('slidechanged', function(event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
		if(event.previousSlide.id == "ctsjncvssec")
			clearStageCartesianJoin();
		if(event.currentSlide.id == "ctsjncvssec") {
			initCanvasCartesianJoin();
			resizeStageCartesianJoin();
		}
});

Reveal.addEventListener('fragmentshown', function(event) {
	// ------------------------- Slides of Cartesian Join -------------------------
	if(event.fragment.id == "cartesianjoincvsPr") {
		resizeStageCartesianJoin();
	}
	else if(event.fragment.id == "step_01_cartesianjoin") {
		//exportRootCartesianJoin.dispatchEvent("step01");
	}
})