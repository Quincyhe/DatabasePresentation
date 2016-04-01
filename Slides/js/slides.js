var canvas = null, stage = null, exportRoot = null;

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

function initCanvasNaturalJoin() {
	canvas = document.getElementById("naturaljoincvs");
	exportRoot = new lib.naturaljoin();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

function initCanvasInnerJoin() {
	canvas = document.getElementById("innerjoincvs");
	exportRoot = new lib.innerjoin();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}
function initCanvasLeftOuterJoin() {
	canvas = document.getElementById("lotjoincvs");
	exportRoot = new lib.leftouterjoin();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}
function initCanvasRightOuterJoin() {
	canvas = document.getElementById("rotjoincvs");
	exportRoot = new lib.rightouterjoin();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}
function initCanvasFullOuterJoin() {
	canvas = document.getElementById("fotjoincvs");
	exportRoot = new lib.fullouterjoin();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

function resizeStage() {
	var cxt = canvas.getContext("2d");
	// THE CANVAS IS SCALED ANYWAY...BECAUSE OF THIS DAMN JS LIBRARY.
	cxt.canvas.height = canvas.offsetHeight * Reveal.getScale();
	cxt.canvas.width = canvas.offsetWidth * Reveal.getScale();
	stage.scaleX = canvas.width / 960;
	stage.scaleY = canvas.height / 602;
	stage.update();
}

function clearStage() {
	stage.removeAllChildren();
	stage = null;
	exportRoot = null;
	canvas = null;
}

Reveal.addEventListener('slidechanged', function(event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
		if(event.currentSlide.id == "ctsjncvssec") {
			initCanvasCartesianJoin();
			resizeStage();
		} else if(event.currentSlide.id == "ntljncvssec") {
			initCanvasNaturalJoin();
			resizeStage();
		} else if(event.currentSlide.id == "inrjncvssec") {
			initCanvasInnerJoin();
			resizeStage();
		} else if(event.currentSlide.id == "lotjncvssec") {
			initCanvasLeftOuterJoin();
			resizeStage();
		} else if(event.currentSlide.id == "rotjncvssec") {
			initCanvasRightOuterJoin();
			resizeStage();
		} else if(event.currentSlide.id == "fotjncvssec") {
			initCanvasFullOuterJoin();
			resizeStage();
		} else {
			if(stage != null)
				clearStage();
		}
});

Reveal.addEventListener('fragmentshown', function(event) {
	// ------------------------- Slides of Cartesian Join -------------------------
	if(event.fragment.id == "start_cartesianjoin" || event.fragment.id == "start_naturaljoin" || event.fragment.id == "start_innerjoin" || event.fragment.id == "start_leftouterjoin" || event.fragment.id == "start_rightouterjoin" || event.fragment.id == "start_fullouterjoin") {
		exportRoot.dispatchEvent('playit');
		//exportRootCartesianJoin.dispatchEvent("step01");
	} else if(event.fragment.id == "end_cartesianjoin" || event.fragment.id == "end_naturaljoin" || event.fragment.id == "end_innerjoin" || event.fragment.id == "end_leftouterjoin" || event.fragment.id == "end_rightouterjoin" || event.fragment.id == "end_fullouterjoin") {
		exportRoot.dispatchEvent('stopit');
	}
})

Reveal.addEventListener('fragmenthidden', function(event) {
	// ------------------------- Slides of Cartesian Join -------------------------
	if(event.fragment.id == "start_cartesianjoin" || event.fragment.id == "start_naturaljoin" || event.fragment.id == "start_innerjoin" || event.fragment.id == "start_leftouterjoin" || event.fragment.id == "start_rightouterjoin" || event.fragment.id == "start_fullouterjoin") {
		exportRoot.dispatchEvent('resetit');
	}
})
