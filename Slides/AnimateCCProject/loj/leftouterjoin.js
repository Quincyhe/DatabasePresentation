(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 960,
	height: 602,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.RightRow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVA4QgKgJAAgMIAAgsIgIAAQgHAAgDgDQgEgDAAgFQAAgFAEgCQADgDAHAAIAIAAIAAgTQAAgIADgDQADgDAEAAQAFAAADADQADADAAAIIAAATIAkAAQAIAAAEADQACACABAFQgBAFgCADQgEADgIAAIgkAAIAAAoQAAAHACACQAFADAJAAQAQAAANgHQAGgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgJgIg");
	this.shape.setTransform(313.2,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAIANABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_1.setTransform(299.9,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBDQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAVAAIAAhVIgTAFIgHABQgEAAgCgDQgDgDAAgFQAAgEACgDQACgCAHgCIArgMIAABxIAVAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_2.setTransform(287.3,18.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA/QgDgDAAgEIACgHIAehdIguAAQgBAGgCADQgDADgFAAQgEAAgDgEQgDgDAAgHIAAgTIBZAAIAAAVIgiBjQgCAHgDACQgCACgEAAQgCAAgEgDg");
	this.shape_3.setTransform(204.9,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnA6QgJgFABgGQAAgFACgDQAEgDAEAAQAEAAAEAEQAEADAFABQAGACALAAQAQAAAIgGQAGgGAAgNQABgMgHgHQgHgFgKAAQgKAAgOAFQgDACgDAAQgFAAgDgDQgDgCAAgFIAAg8IA+AAQAIAAADADQAEACAAAFQAAAFgEADQgDADgIAAIgpAAIAAAZQAMgEAIAAQATAAAMANQANALABAVQgBAWgNAMQgNAMgYAAQgXAAgOgJg");
	this.shape_4.setTransform(192.5,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AADBCQgGAAgDgDQgDgDAAgFQAAgEADgDQADgDAGAAIAIAAIAAgJIg3AAIAAgRIAwhUIAcAAIAABQQAHAAADADQADADAAAFQAAAEgDADQgDADgHAAIAAAJQAHAAADADQADADAAAEQAAAFgDADQgDADgIAAgAgRAPIAcAAIAAgxg");
	this.shape_5.setTransform(179.7,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA/QgJgCgHgFIgFAFIgEABQgFAAgDgEQgDgDAAgHIAAgPQAAgHADgDQADgEAFAAQAEAAACACQADACABAFIADAGQADADAHAEQAIADAHAAQAOAAAJgHQAGgEAAgGQAAgDgDgEQgDgDgGgDIgRgEQgRgDgIgFQgJgCgFgIQgGgIAAgKQAAgPANgLQANgMATAAQAHAAAHACQAHACAFAEQAFgEAEAAQAEAAADADQADADAAAIIAAAPQAAAIgDADQgDADgEAAQgEAAgDgCQgCgCgBgFIgDgHQgDgEgGgDQgGgDgHAAQgKAAgHAGQgHAFAAAGQAAAEADADQADAEAFACIASAEQAQAEAJADQAIACAGAIQAGAIAAAMQAAAPgLAKQgPAMgWAAQgHAAgIgCg");
	this.shape_6.setTransform(167.3,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaA5QgMgGgIgNQgJgOAAgPIAAgNQAAgQAIgOQAIgOANgIQAOgIANAAQAJAAAIACQAIACAHAFIAEgEQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAADAEQACADAAAHIAAASQAAAIgCADQgDADgFAAQgEAAgDgCQgCgCgCgHQAAgEgCgDQgFgEgHgDQgIgDgHAAQgIAAgIAEQgIAFgGAJQgGAJAAANIAAALQAAAQALAKQALAKASAAQAMAAAIgDQAEgCAGgGIAFgEIAEgBQAEAAAEADQADADAAAFQAAAEgFAFQgGAHgKAEQgNAGgQAAQgRAAgPgIg");
	this.shape_7.setTransform(154.7,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpA9QgGgEAAgGQAAgFADgDQADgDAEAAQADAAADACQAFAEAEABQAGABALAAQAQAAAIgFQAIgEAAgJQAAgGgEgGQgFgHgIgDQgFgCgJgBQgFAAgDgCQgDgDAAgDQAAgFADgDQADgCAFAAIAJAAQAEgBAFgCQAEgDACgDQADgEAAgEQAAgHgGgFQgGgFgLAAQgOAAgIAIIgEAEIgFABQgEAAgDgDQgDgDAAgFQAAgHAJgGQAOgKATAAQATAAAMALQAMALAAAQQAAAIgEAHQgDAHgHAGQAJAEAFAJQAEAIAAAKQAAALgGAKQgGAJgLAGQgMAEgRAAQgYAAgNgIg");
	this.shape_8.setTransform(59.8,19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AJYjHISwAAIAAGPIywAAIyuAAAJYjHIAAGPApWjHIAAGPIyxAAIAAmPgAJYjHIyuAA");
	this.shape_9.setTransform(180,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DDDDDD").s().p("AJYDHIAAmOISwAAIAAGOgAJYDHIyuAAIAAmOIAAGOIyxAAIAAmOISxAAISuAAIAAGOg");
	this.shape_10.setTransform(180,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,362,42);


(lib.NullRow3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.737)").s().p("AgTBQQgDgDAAgEQAAgDADgEQAKgSAGgRQADgPAAgQQAAgPgDgQQgGgPgKgTQgDgEAAgDQAAgEADgDQADgDAFgBQAEAAACADQAEADAFANQAKASADAMQAGASAAAQQAAARgGATQgFANgIARQgFAMgEADQgDACgDAAQgFAAgDgDg");
	this.shape.setTransform(330,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.737)").s().p("AgiBCQgIAAgDgDQgEgDABgEQgBgFAEgDQADgDAIAAIAZAAIAAhZIgRAAQgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAkAAIAABuIAZAAQAIAAADADQADADABAFQgBAEgDADQgDADgIAAg");
	this.shape_1.setTransform(318.8,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.737)").s().p("AgiBCQgIAAgDgDQgEgDABgEQgBgFAEgDQADgDAIAAIAZAAIAAhZIgRAAQgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAkAAIAABuIAZAAQAIAAADADQADADABAFQgBAEgDADQgDADgIAAg");
	this.shape_2.setTransform(306.2,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.737)").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_3.setTransform(293.5,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,102,102,0.737)").s().p("AAYAvQgHAAgDgDQgEgDAAgEQAAgFADgDQAEgDAGAAIAAglQAAgHgDgDQgFgFgKAAQgFAAgGADQgFAEgJAJIAAAkQAJABACABQAFADAAAGQAAAEgDADQgDADgIAAIgYAAQgIAAgDgDQgDgDAAgEQAAgGAFgDQACgBAIgBIAAgxQgGAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAUAAIAAAIQAGgFAHgDQAHgDAGABQATAAALALQAIAJAAAQIAAAkQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_4.setTransform(281,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,102,0.737)").s().p("AAGBRQgFgEgEgMQgKgTgEgLQgFgSAAgRQAAgRAGgSQAEgOAKgQQAEgMAEgCQACgDAEgBQAFABADADQADADAAAEQAAADgDAEQgKATgFAPQgFAQAAAPQAAAQAFAPQAFARAKASQADAEAAADQAAAEgDADQgDADgFAAQgEABgCgDg");
	this.shape_5.setTransform(270,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,102,102,0.737)").s().p("AgTBQQgDgDAAgEQAAgDACgEQAMgSAEgRQAEgPAAgQQAAgPgEgQQgEgPgMgTQgCgEAAgDQAAgEADgDQADgDAEgBQAEAAADADQAEADAFANQAKASAEAMQAFASAAAQQAAARgGATQgEANgKARQgEAMgEADQgCACgFAAQgEAAgDgDg");
	this.shape_6.setTransform(210,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.737)").s().p("AgiBCQgIAAgDgDQgEgDAAgEQAAgFAEgDQADgDAIAAIAZAAIAAhZIgRAAQgHAAgDgDQgEgDAAgFQAAgEAEgDQADgDAHAAIAkAAIAABuIAZAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_7.setTransform(198.8,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,102,102,0.737)").s().p("AgiBCQgIAAgDgDQgEgDAAgEQAAgFAEgDQADgDAIAAIAZAAIAAhZIgRAAQgHAAgDgDQgEgDAAgFQAAgEAEgDQADgDAHAAIAkAAIAABuIAZAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_8.setTransform(186.2,19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,102,102,0.737)").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_9.setTransform(173.5,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,102,102,0.737)").s().p("AAYAvQgHAAgDgDQgEgDAAgEQAAgFADgDQAEgDAGAAIAAglQAAgHgDgDQgFgFgKAAQgFAAgGADQgFAEgJAJIAAAkQAJABACABQAFADAAAGQAAAEgDADQgDADgIAAIgYAAQgIAAgDgDQgDgDAAgEQAAgGAFgDQACgBAIgBIAAgxQgGAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAUAAIAAAIQAGgFAHgDQAHgDAGABQATAAALALQAIAJAAAQIAAAkQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_10.setTransform(161,20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,102,102,0.737)").s().p("AAGBRQgEgEgFgMQgKgTgDgLQgGgSAAgRQAAgRAGgSQAFgOAIgQQAFgMADgCQAEgDADgBQAFABADADQADADAAAEQAAADgDAEQgKATgGAPQgEAQAAAPQAAAQAEAPQAGARAKASQADAEAAADQAAAEgDADQgDADgFAAQgDABgDgDg");
	this.shape_11.setTransform(150,20.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,102,102,0.741)").s().p("AgTBQQgDgDAAgEQAAgDACgEQAMgSAFgRQADgPAAgQQAAgPgDgQQgFgPgMgTQgCgEAAgDQAAgEADgDQADgDAFgBQADAAADADQAEADAFANQAKASADAMQAGASAAAQQAAARgGATQgEANgJARQgGAMgCADQgDACgEAAQgFAAgDgDg");
	this.shape_12.setTransform(90,20.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,102,102,0.741)").s().p("AgiBCQgIAAgDgDQgDgDgBgEQABgFADgDQADgDAIAAIAZAAIAAhZIgRAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAHAAIAkAAIAABuIAZAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_13.setTransform(78.8,19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,102,102,0.741)").s().p("AgiBCQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAZAAIAAhZIgRAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAHAAIAkAAIAABuIAZAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_14.setTransform(66.2,19);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,102,102,0.741)").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_15.setTransform(53.5,21.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,102,102,0.741)").s().p("AAYAvQgHAAgDgDQgEgDAAgEQAAgFADgDQAEgDAGAAIAAglQAAgHgDgDQgFgFgKAAQgFAAgGADQgFAEgJAJIAAAkQAJABACABQAFADAAAGQAAAEgDADQgDADgIAAIgYAAQgIAAgDgDQgDgDAAgEQAAgGAFgDQACgBAIgBIAAgxQgGAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAUAAIAAAIQAGgFAHgDQAHgDAGABQATAAALALQAIAJAAAQIAAAkQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_16.setTransform(41,20.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,102,102,0.741)").s().p("AAGBRQgFgEgEgMQgKgTgEgLQgFgSAAgRQAAgRAGgSQAEgOAKgQQAEgMAEgCQACgDAFgBQAEABADADQADADAAAEQAAADgCAEQgMATgEAPQgFAQAAAPQAAAQAFAPQAEARAMASQACAEAAADQAAAEgDADQgDADgEAAQgFABgCgDg");
	this.shape_17.setTransform(30,20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AJYjHISwAAIAAGPIywAAIyuAAAJYjHIAAGPApWjHIAAGPIyxAAIAAmPgAJYjHIyuAA");
	this.shape_18.setTransform(180,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,362,42);


(lib.LeftRow3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglAxQgVgTABgeQgBgdAVgTQASgQATAAQAXAAASATQASATAAAaQAAAcgSASQgSATgXAAQgTAAgSgQgAgZgeQgMANAAARQAAATAMAMQAMANANAAQAOAAAMgNQALgMAAgTQAAgSgLgMQgMgNgOAAQgNAAgMANg");
	this.shape.setTransform(312.5,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIADAAIAAhRIgDAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIBhAAIAAAhQAAAHgDADQgDAEgFAAQgEAAgDgEQgDgDAAgHIAAgMIg0AAIAAAfIARAAQAAgIABgDQAEgFAFAAQAEAAAEAEQACADAAAHIAAAXQAAAHgCADQgEAEgEAAQgFAAgEgFQgBgDAAgIIgRAAIAAAfIAUAAQAHAAADADQADADABAEQgBAFgDADQgDADgHAAg");
	this.shape_1.setTransform(300.3,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNA/QgJgCgHgFIgFAFIgEABQgFAAgDgEQgDgDAAgHIAAgPQAAgHADgDQADgEAFAAQAEAAACACQADACABAFIADAGQADADAHAEQAIADAHAAQAOAAAJgHQAGgEAAgGQAAgDgDgEQgDgDgGgDIgRgEQgRgDgIgFQgJgCgFgIQgGgIAAgKQAAgPANgLQANgMATAAQAHAAAHACQAHACAFAEQAFgEAEAAQAEAAADADQADADAAAIIAAAPQAAAIgDADQgDADgEAAQgEAAgDgCQgCgCgBgFIgDgHQgDgEgGgDQgGgDgHAAQgKAAgHAGQgHAFAAAGQAAAEADADQADAEAFACIASAEQAQAEAJADQAIACAGAIQAGAIAAAMQAAAPgLAKQgPAMgWAAQgHAAgIgCg");
	this.shape_2.setTransform(287.3,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAcA+Ig0hTIAAA+IAIAAQAIAAADADQADADABAEQgBAFgDADQgDADgIAAIgcAAQgHAAgDgDQgEgDABgFQgBgEAEgDQADgDAGAAIAAhRIgCAAQgIAAgDgCQgEgDAAgFQAAgFAEgDQADgDAIAAIAXAAIA0BTIAAg+IgHAAQgHAAgEgCQgDgDAAgFQAAgFADgDQAEgDAHAAIAcAAQAHAAAEADQACADAAAFQAAAFgCADQgEACgGAAIAABmg");
	this.shape_3.setTransform(192.4,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAFAAIgFgNIgxAAIgFANIAFAAQAHAAAEADQADADAAAEQAAAFgDADQgEADgHAAIgcAAQgIAAgDgDQgDgDAAgFQAAgFADgDQADgCAIAAIAhhRIgOAAQgHAAgDgCQgEgDAAgFQAAgFAEgDQADgDAHAAIAsAAIAqBmQAHAAACABQAFAEAAAFQAAAFgDADQgDADgIAAgAgQAHIAgAAIgQgog");
	this.shape_4.setTransform(179.9,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIA+IgshmQgHAAgCgBQgFgDgBgGQAAgFAEgDQADgDAIAAIAcAAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgFAAIAdBHIAehHIgFAAQgHAAgDgCQgEgDAAgFQAAgFAEgDQADgDAHAAIAdAAQAHAAADADQADADAAAFQAAAGgEADQgDABgHAAIgrBmg");
	this.shape_5.setTransform(167.3,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpA9QgGgEAAgGQAAgFADgDQADgDAEAAQADAAADACQAFAEAEABQAGABALAAQAQAAAIgFQAIgEAAgJQAAgGgEgGQgFgHgIgDQgFgCgJgBQgFAAgDgCQgDgDAAgDQAAgFADgDQADgCAFAAIAJAAQAEgBAFgCQAEgDACgDQADgEAAgEQAAgHgGgFQgGgFgLAAQgOAAgIAIIgEAEIgFABQgEAAgDgDQgDgDAAgFQAAgHAJgGQAOgKATAAQATAAAMALQAMALAAAQQAAAIgEAHQgDAHgHAGQAJAEAFAJQAEAIAAAKQAAALgGAKQgGAJgLAGQgMAEgRAAQgYAAgNgIg");
	this.shape_6.setTransform(59.9,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AJYjHISwAAIAAGPIywAAIyuAAAJYjHIAAGPApWjHIAAGPIyxAAIAAmPgAJYjHIyuAA");
	this.shape_7.setTransform(180,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DDDDDD").s().p("AJYDHIyuAAIAAmOISuAAIAAGOIAAmOISwAAIAAGOgA8HDHIAAmOISxAAIAAGOg");
	this.shape_8.setTransform(180,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,362,42);


(lib.LeftRow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVA4QgKgJAAgMIAAgsIgIAAQgHAAgDgDQgEgDAAgFQAAgFAEgCQADgDAHAAIAIAAIAAgTQAAgIADgDQADgDAEAAQAFAAADADQADADAAAIIAAATIAkAAQAIAAAEADQACACAAAFQAAAFgCADQgEADgIAAIgkAAIAAAoQAAAHACACQAFADAJAAQAQAAANgHQAGgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgJgIg");
	this.shape.setTransform(338.4,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYAwQgHAAgDgDQgEgDAAgFQAAgEADgDQAEgDAGAAIAAgmQAAgHgDgEQgFgDgKAAQgFAAgGADQgFADgJAIIAAAmQAJAAACABQAFADAAAGQAAAFgDADQgDADgIAAIgYAAQgIAAgDgDQgDgDAAgFQAAgGAFgDQACgBAIAAIAAgxQgGAAgDgDQgEgDAAgFQAAgFAEgCQADgDAHAAIAUAAIAAAGQAGgFAHgCQAHgCAGgBQATAAALAMQAIAKAAAOIAAAmQAHAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_1.setTransform(325.1,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaArQgNgHgHgLQgHgMAAgMQAAgLAHgMQAHgMANgHQANgHANAAQAOAAANAHQANAHAHAMQAHAMAAALQAAAMgHALQgHAMgNAGQgNAHgOAAQgNAAgNgGgAgWgSQgKAJAAAKQAAAKAKAJQAJAIANAAQAOAAAJgIQAKgJAAgKQAAgIgHgJQgKgLgQAAQgNAAgJAJg");
	this.shape_2.setTransform(312.5,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAhAwIAAhBQAAgEgCgCQgCgCgDAAQgEAAgCACQgFACgFAHIAAApQAGAAAEADQADADAAAEQAAAFgDADQgEADgHAAIgSAAIAAhBQAAgEgCgCQgCgCgDAAQgDAAgEACQgEADgFAGIAAApQAHAAADADQADADAAAEQAAAFgDADQgDADgIAAIgTAAQgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAHAAIAAgxQgHAAgDgDQgDgDAAgFQAAgFADgCQADgDAIAAIAUAAIAAAFQAFgEAFgDQAEgCAFAAQAFABAEACQAEACADAEQAGgEAFgCQAGgCAFgBQAMABAHAGQAKAIAAANIAAAuQAGAAADADQAEADAAAEQAAAFgEADQgDADgHAAg");
	this.shape_3.setTransform(300,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQAQgOAVAAQALAAALAEQALAFAGAFQAGAIAFALQAEAIAAAIIAAAJIhVAAQAEAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgFAEgPAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA9AAQgFgJgIgFQgIgEgKAAQgJAAgIAEg");
	this.shape_4.setTransform(287.2,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnAwQgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAMAAIAAgxIgHAAQgIAAgDgDQgDgDAAgFQAAgFADgCQADgDAIAAIAcAAIAAAMQAMgJAHgDQAIgDAHgBQAKAAAJAIQAHAGAAAEQAAAFgDADQgDADgFAAQgEAAgEgEQgEgDgEAAQgEgBgJAGQgIAFgMAMIAAAeIAcAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_5.setTransform(275,20.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIADAAIAAhRIgDAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIBhAAIAAAhQAAAHgDADQgDAEgFAAQgEAAgDgEQgDgDAAgHIAAgMIg0AAIAAAfIARAAQAAgIABgDQAEgFAFAAQAEAAAEAEQACADABAHIAAAXQgBAHgCADQgEAEgEAAQgFAAgEgFQgBgDAAgIIgRAAIAAAfIATAAQAIAAADADQADADABAEQgBAFgDADQgDADgIAAg");
	this.shape_6.setTransform(262.5,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAOAAIAAgfIgjgyQgHAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIATAAQAHAAAEADQADADAAAFQAAAHgIADIASAeIATgeQgFgBgCgDQgCgDAAgDQAAgFAEgDQADgDAHAAIAUAAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgiAyIAAAfIAOAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_7.setTransform(205.1,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAMAAIAAhRIgMAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIArAAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgKAAIAABRIArAAIAAgUQAAgIADgDQADgDAFAAQAEAAADADQADADAAAIIAAApg");
	this.shape_8.setTransform(192.6,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAMAAIAAhRIgMAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIArAAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgKAAIAABRIArAAIAAgUQAAgIADgDQADgDAFAAQAEAAADADQADADAAAIIAAApg");
	this.shape_9.setTransform(180,19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeA+QgIAAgDgDQgEgDABgFQgBgEAEgDQADgDAIAAIAVAAIAAhRIgVAAQgIAAgDgCQgEgDABgFQgBgFAEgDQADgDAIAAIA9AAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgVAAIAABRIAVAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_10.setTransform(167.3,19.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgrA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIADAAIAAhRIgDAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIAyAAQATAAAMALQALAKAAAPQAAAHgDAGQgCAGgGAFQAKAEAFAIQAFAIAAAKQAAAIgDAHIgHAIQgFAEgIADQgHADgMAAgAgTApIAiAAQANAAAFgEQAEgDAAgFQAAgHgIgGQgIgGgOAAIgaAAgAgTgJIAVAAQAMAAAJgGQAFgEAAgHQAAgFgFgEQgFgFgMAAIgZAAg");
	this.shape_11.setTransform(154.6,19.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguBEIAAgXQA2gtAMgNQAGgHAAgGQAAgIgHgFQgGgHgMAAQgJABgHAGQgEAEgDAGQgBAFgCACQgDACgEAAQgEAAgDgDQgDgEAAgEQAAgGAFgKQAGgJALgFQALgGALABQAUgBAMAMQANANAAAQQAAAJgDAIQgEAHgOALIgoAmIAsAAQADgEAEAAQAFAAADAEQACADAAAIIAAAKg");
	this.shape_12.setTransform(59.5,18.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AJYjGISwAAIAAGNIywAAIyuAAAJYjGIAAGNApWjGIAAGNIyxAAIAAmNgAJYjGIyuAA");
	this.shape_13.setTransform(180,20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFCC").s().p("AJYDHIyuAAIAAmNISuAAIAAGNIAAmNISwAAIAAGNgA8HDHIAAmNISxAAIAAGNg");
	this.shape_14.setTransform(180,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,362,42);


(lib.LeftRow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQAQgOAVAAQALAAALAEQALAFAGAFQAGAIAFALQAEAIAAAIIAAAJIhVAAQAEAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgFAEgPAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA8AAQgEgJgIgFQgIgEgKAAQgJAAgIAEg");
	this.shape.setTransform(343.9,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAIANABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_1.setTransform(331.4,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaArQgNgHgHgLQgHgMAAgMQAAgLAHgMQAHgMANgHQANgHANAAQAOAAANAHQANAHAHAMQAHAMAAALQAAAMgHALQgHAMgNAGQgNAHgOAAQgNAAgNgGgAgWgSQgKAJAAAKQAAAKAKAJQAJAIANAAQAOAAAJgIQAKgJAAgKQAAgIgHgJQgKgLgQAAQgNAAgJAJg");
	this.shape_2.setTransform(318.8,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5AxIAAgiQAAgIADgDQACgDAFAAQAFAAADADQADADAAAIIAAAUQAOAHAKAAQAGAAAGgCQADgDADgDQADgEABgDIABgJIAAg7IgYAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAHAAIA5AAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgMAAIAAA+QAAAMgEAHQgGALgMAGQgKAGgMAAQgRAAgcgOg");
	this.shape_3.setTransform(306.9,19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAvQgHAAgDgDQgEgDAAgEQAAgFADgDQAEgDAGAAIAAglQAAgHgDgDQgFgFgKAAQgFAAgGADQgFAEgJAJIAAAkQAJABACABQAFADAAAGQAAAEgDADQgDADgIAAIgYAAQgIAAgDgDQgDgDAAgEQAAgGAFgDQACgBAIgBIAAgxQgGAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAUAAIAAAIQAGgFAHgDQAHgDAGABQATAAALALQAIAJAAAQIAAAkQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_4.setTransform(281,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsAoQgKgJAAgLQAAgNANgJQAOgLAYAAQAHAAANACIAAgFQAAgFgEgDQgEgDgKAAQgJAAgPAEIgJABQgEAAgDgDQgDgDAAgFIABgEIADgEIAIgCIAQgEIAOgBQASAAALAIQALAJAAAOIAAAqIADAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgYAAIAAgFQgIAEgJACQgIACgIAAQgRAAgLgJgAgbAMQgFAEAAAEQAAADACACQAGADAIAAQAIAAAIgDQAJgDAIgFIAAgJQgNgCgJAAQgMAAgKAGg");
	this.shape_5.setTransform(268.6,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA/QgJgCgHgFIgFAFIgEABQgFAAgDgEQgDgDAAgHIAAgPQAAgHADgDQADgEAFAAQAEAAACACQADACABAFIADAGQADADAHAEQAIADAHAAQAOAAAJgHQAGgEAAgGQAAgDgDgEQgDgDgGgDIgRgEQgRgDgIgFQgJgCgFgIQgGgIAAgKQAAgPANgLQANgMATAAQAHAAAHACQAHACAFAEQAFgEAEAAQAEAAADADQADADAAAIIAAAPQAAAIgDADQgDADgEAAQgEAAgDgCQgCgCgBgFIgDgHQgDgEgGgDQgGgDgHAAQgKAAgHAGQgHAFAAAGQAAAEADADQADAEAFACIASAEQAQAEAJADQAIACAGAIQAGAIAAAMQAAAPgLAKQgPAMgWAAQgHAAgIgCg");
	this.shape_6.setTransform(255.8,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAOAAIAAgfIgjgyQgHAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIATAAQAHAAAEADQADADAAAFQAAAHgIADIASAeIATgeQgFgBgCgDQgCgDAAgDQAAgFAEgDQADgDAHAAIAUAAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgiAyIAAAfIAOAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_7.setTransform(205.1,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZA+QgIAAgDgDQgCgDAAgFQAAgEACgDQADgDAIAAIAIAAIAAg9IgYA0IgRAAIgYg0IAAA9IAIAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgcAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAGAAIAAhRQgGAAgCgDQgDgDAAgEQAAgFADgDQAEgDAHAAIAXAAIAbA+IAcg+IAXAAQAIAAADADQADADAAAFQAAAEgDADQgDADgFAAIAABRQAGAAAEADQADADAAAEQAAAFgDADQgEADgHAAg");
	this.shape_8.setTransform(192.6,19.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAZA+QgIAAgDgDQgCgDAAgFQAAgEACgDQADgDAIAAIAIAAIAAg9IgYA0IgRAAIgYg0IAAA9IAIAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgcAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAGAAIAAhRQgGAAgCgDQgDgDAAgEQAAgFADgDQAEgDAHAAIAXAAIAbA+IAcg+IAXAAQAHAAAEADQADADAAAFQAAAEgDADQgDADgFAAIAABRQAGAAAEADQADADAAAEQAAAFgDADQgEADgHAAg");
	this.shape_9.setTransform(180,19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeA+QgIAAgDgDQgEgDABgFQgBgEAEgDQADgDAIAAIAVAAIAAhRIgVAAQgIAAgDgCQgEgDABgFQgBgFAEgDQADgDAIAAIA9AAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgVAAIAABRIAVAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_10.setTransform(167.3,19.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag5AxIAAgiQAAgIADgDQACgDAFAAQAFAAADADQADADAAAIIAAAUQAOAHAKAAQAGAAAGgCQADgDADgDQADgEABgDIABgJIAAg7IgYAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAHAAIA5AAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgMAAIAAA+QAAAMgEAHQgGALgMAGQgKAGgMAAQgRAAgcgOg");
	this.shape_11.setTransform(155.4,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeBDQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAVAAIAAhVIgTAFIgHABQgEAAgCgDQgDgDAAgFQAAgEACgDQACgCAHgCIArgMIAABxIAVAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_12.setTransform(59.9,18.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AJYjHISwAAIAAGPIywAAIyuAAAJYjHIAAGPApWjHIAAGPIyxAAIAAmPgAJYjHIyuAA");
	this.shape_13.setTransform(180,20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DDDDDD").s().p("AJYDHIAAmOISwAAIAAGOgAJYDHIyuAAIAAmOIAAGOIyxAAIAAmOISxAAISuAAIAAGOg");
	this.shape_14.setTransform(180,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,362,42);


(lib.Cross = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("AjTjTIDTDTIjTDUADUjTIjUDTIDUDU");
	this.shape.setTransform(59.5,59.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(10,1,1).p("AJTAAQAAD2ivCuQiuCvj2AAQj1AAivivQiuiuAAj2QAAj1CuiuQCviuD1AAQD2AACuCuQCvCuAAD1g");
	this.shape_1.setTransform(59.5,59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AllFmQiUiUAAjSQAAjQCUiVQCViUDQAAQDRAACUCUQCVCVAADQQAADSiVCUQiUCUjRAAQjQAAiViUgAAAAAIDUDUIjUjUIDUjSIjUDSgAjSDUIDSjUIjSjSIDSDSg");
	this.shape_2.setTransform(59.5,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,129,129);


(lib.Check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("Aj0g2IB7EDIFumZ");
	this.shape.setTransform(59.5,59.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00CC00").ss(10,1,1).p("AJTAAQAAD2ivCuQiuCvj2AAQj1AAivivQiuiuAAj2QAAj1CuivQCviuD1AAQD2AACuCuQCvCvAAD1g");
	this.shape_1.setTransform(59.5,59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AllFmQiUiUAAjSQAAjQCUiVQCViUDQAAQDRAACVCUQCUCVAADQQAADSiUCUQiVCUjRAAQjQAAiViUgAh5DNIFumZIluGZIh6kDIB6EDg");
	this.shape_2.setTransform(59.5,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,129,129);


(lib.CombinedRow5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LeftRow3();
	this.instance.setTransform(180,20,1,1,0,0,0,180,20);

	this.instance_1 = new lib.RightRow1();
	this.instance_1.setTransform(540,20,1,1,0,0,0,180,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,722,42);


// stage content:
(lib.leftouterjoin = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.addEventListener('playit', this.play.bind(this));
		this.addEventListener('stopit', this.gotoAndPlay.bind(this, this.timeline.duration));
		this.addEventListener('resetit', this.gotoAndStop.bind(this, 0));
	}
	this.frame_1 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}
	this.frame_2 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1000);
	}
	this.frame_10 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}
	this.frame_11 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1000);
	}
	this.frame_36 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 2000);
	}
	this.frame_44 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 2000);
	}
	this.frame_45 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}
	this.frame_46 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1000);
	}
	this.frame_54 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}
	this.frame_55 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1000);
	}
	this.frame_80 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 2000);
	}
	this.frame_87 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 2000);
	}
	this.frame_88 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}
	this.frame_89 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1000);
	}
	this.frame_124 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 2000);
	}
	this.frame_125 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}
	this.frame_126 = function() {
		this.stop();
		setTimeout(this.play.bind(this), 1000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(8).call(this.frame_10).wait(1).call(this.frame_11).wait(25).call(this.frame_36).wait(8).call(this.frame_44).wait(1).call(this.frame_45).wait(1).call(this.frame_46).wait(8).call(this.frame_54).wait(1).call(this.frame_55).wait(25).call(this.frame_80).wait(7).call(this.frame_87).wait(1).call(this.frame_88).wait(1).call(this.frame_89).wait(35).call(this.frame_124).wait(1).call(this.frame_125).wait(1).call(this.frame_126).wait(9));

	// NotMatched
	this.instance = new lib.Cross("synched",0);
	this.instance.setTransform(480.5,76.6,1,1,0,0,0,59.5,59.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({alpha:0},7).wait(2).to({alpha:1},0).to({alpha:0},7).wait(28).to({alpha:1},0).to({alpha:0},7).wait(2).to({alpha:1},0).to({alpha:0},7).wait(64).to({alpha:1},0).to({alpha:0},7).to({_off:true},1).wait(1));

	// Matched
	this.instance_1 = new lib.Check("synched",0);
	this.instance_1.setTransform(480.5,76.6,1,1,0,0,0,59.5,59.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({alpha:0},7).wait(39));

	// FinalTitles
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnAvQgIAAgDgCQgDgEAAgEQAAgFADgCQADgDAIAAIAMAAIAAgxIgHAAQgIgBgDgCQgDgEAAgEQAAgFADgDQADgCAIAAIAcAAIAAAMQAMgJAHgDQAIgEAHAAQAKAAAJAIQAHAFAAAFQAAAFgDADQgDADgFABQgEgBgEgEQgEgDgEAAQgEgBgJAGQgIAFgMAMIAAAeIAcAAQAIAAADADQADACAAAFQAAAEgDAEQgDACgIAAg");
	this.shape.setTransform(823.8,276);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQAQgOAVAAQAMAAALAEQAKAFAGAFQAHAIAEALQAEAIAAAIIAAAJIhUAAQADAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgFAEgPAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA9AAQgGgJgHgFQgIgEgKAAQgKAAgHAEg");
	this.shape_1.setTransform(810.8,276.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVA4QgKgJAAgMIAAgsIgIAAQgHAAgDgDQgEgDAAgFQAAgFAEgCQADgDAHAAIAIAAIAAgTQAAgIADgDQACgDAGAAQAEAAADADQADADAAAIIAAATIAkAAQAJAAACADQAEACAAAFQAAAFgEADQgCADgJAAIgkAAIAAAoQAAAHACACQAFADAJAAQAQAAANgHQAGgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgJgIg");
	this.shape_2.setTransform(799,274.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAIANABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_3.setTransform(785.7,276.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQAQgOAVAAQAMAAALAEQAKAFAGAFQAHAIAEALQAEAIAAAIIAAAJIhUAAQADAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgFAEgPAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA9AAQgGgJgHgFQgIgEgKAAQgJAAgIAEg");
	this.shape_4.setTransform(773,276.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhAvIAAhAQAAgEgCgCQgBgCgEAAQgDAAgEACQgEACgFAHIAAApQAGAAAEADQADACAAAFQAAAEgDAEQgDACgIAAIgSAAIAAhAQAAgEgBgCQgCgCgEAAQgEAAgEACQgDADgFAGIAAApQAGAAAEADQADACAAAFQAAAEgDAEQgEACgHAAIgTAAQgIAAgCgCQgEgEAAgEQAAgFADgCQAEgDAGAAIAAgxQgGgBgEgCQgDgEAAgEQAAgFAEgDQACgCAIAAIAUAAIAAAFQAFgEAEgCQAFgDAFAAQAFAAAEADQAEACADAEQAFgEAGgCQAGgDAGAAQALAAAHAHQAKAIAAANIAAAuQAGAAADADQAEACAAAFQAAAEgEAEQgDACgHAAg");
	this.shape_5.setTransform(760.6,276);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQAQgOAVAAQAMAAALAEQAKAFAGAFQAHAIAEALQAEAIAAAIIAAAJIhUAAQADAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgFAEgPAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA9AAQgGgJgHgFQgIgEgKAAQgKAAgHAEg");
	this.shape_6.setTransform(747.8,276.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAIANABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_7.setTransform(735.3,276.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQAQgOAVAAQALAAALAEQALAFAGAFQAGAIAFALQAEAIAAAIIAAAJIhUAAQADAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgEAEgQAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA9AAQgFgJgIgFQgIgEgKAAQgJAAgIAEg");
	this.shape_8.setTransform(690.7,276.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAIANABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_9.setTransform(678.3,276.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnAvQgIAAgDgCQgDgEAAgEQAAgFADgCQADgDAIAAIAMAAIAAgxIgHAAQgIgBgDgCQgDgEAAgEQAAgFADgDQADgCAIAAIAcAAIAAAMQAMgJAHgDQAIgEAHAAQAKAAAJAIQAHAFAAAFQAAAFgDADQgDADgFABQgEgBgEgEQgEgDgEAAQgEgBgJAGQgIAFgMAMIAAAeIAcAAQAIAAADADQADACAAAFQAAAEgDAEQgDACgIAAg");
	this.shape_10.setTransform(665.9,276);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_11.setTransform(652.9,276.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaArQgNgHgHgLQgHgMAAgMQAAgLAHgMQAHgMANgHQANgHANAAQAOAAANAHQANAHAHAMQAHAMAAALQAAAMgHALQgHAMgNAGQgNAHgOAAQgNAAgNgGgAgWgSQgKAJAAAKQAAAKAKAJQAJAIANAAQAOAAAJgIQAKgJAAgKQAAgIgHgJQgKgLgQAAQgNAAgJAJg");
	this.shape_12.setTransform(640.5,276.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiAnQgSgOAAgXQgBgVAQgOQAOgPAXAAQAJAAAHACQAHABAHADQAEgDADAAQAFAAADADQADADAAAIIAAANQAAAIgDADQgDADgFAAQgEAAgDgCQgCgCgBgGQgBgFgGgDQgHgFgNAAQgNAAgKAJQgIAIgBAMQABAMAIAHQAJAHASAAQANAAAJgCQAEgCAFgEQAEgEAEAAQAEAAADADQADADABAFQAAAHgKAGQgOAJgcAAQgWAAgOgKg");
	this.shape_13.setTransform(628.1,276.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgeBDQgIAAgDgCQgDgEAAgEQAAgFADgCQADgDAIAAIAVAAIAAhWIgTAEIgHACQgEAAgCgDQgDgDAAgFQAAgEACgCQACgDAHgCIArgLIAABxIAVAAQAIAAADADQADACAAAFQAAAEgDAEQgDACgIAAg");
	this.shape_14.setTransform(583.1,274);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ag4AKQgIAAgDgDQgDgDAAgEQAAgDADgDQADgDAIAAIBxAAQAIAAADADQADADAAADQAAAEgDADQgDADgIAAg");
	this.shape_15.setTransform(570.5,286.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgtA2QgPgOAAgUQAAgUAPgPQAPgPAWAAQAIAAAGADQAIACAIAFIAAgaIgEAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAZAAIAABuIAEAAQAHAAADADQAEADAAAFQAAAEgEADQgDADgHAAIgZAAIAAgFQgHAEgIACQgHADgHAAQgYAAgOgOgAgeAAQgJAHAAANQAAAMAIAHQAJAIAPAAQAMAAAJgIQAIgHAAgMQAAgNgJgHQgJgJgLAAQgOAAgJAJg");
	this.shape_16.setTransform(558.4,274.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgiBCQgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAZAAIAAgxIgRAAQgHAAgEgDQgDgDAAgFQAAgFADgCQAEgDAHAAIAkAAIAABGIAZAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAgAgQgrIAAgWIAXAAIAAAWg");
	this.shape_17.setTransform(545.3,274.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag4AKQgIAAgDgDQgDgDAAgEQAAgDADgDQADgDAIAAIBxAAQAIAAADADQADADAAADQAAAEgDADQgDADgIAAg");
	this.shape_18.setTransform(532.7,286.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_19.setTransform(520,276.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgVA4QgKgJAAgMIAAgsIgIAAQgHAAgEgDQgDgDAAgFQAAgFADgCQAEgDAHAAIAIAAIAAgTQAAgIADgDQADgDAFAAQAEAAADADQADADAAAIIAAATIAkAAQAJAAACADQAEACAAAFQAAAFgEADQgCADgJAAIgkAAIAAAoQAAAHACACQAFADAJAAQAQAAANgHQAGgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgJgIg");
	this.shape_20.setTransform(508.2,274.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAIANABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_21.setTransform(494.9,276.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnAvQgIAAgDgCQgDgEAAgEQAAgFADgCQADgDAIAAIAMAAIAAgxIgHAAQgIgBgDgCQgDgEAAgEQAAgFADgDQADgCAIAAIAcAAIAAAMQAMgJAHgDQAIgEAHAAQAKAAAJAIQAHAFAAAFQAAAFgDADQgDADgFABQgEgBgEgEQgEgDgEAAQgEgBgJAGQgIAFgMAMIAAAeIAcAAQAIAAADADQADACAAAFQAAAEgDAEQgDACgIAAg");
	this.shape_22.setTransform(463.7,276);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtA2QgPgOAAgUQAAgUAPgPQAPgPAWAAQAIAAAGADQAIACAIAFIAAgaIgEAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAZAAIAABuIAEAAQAHAAADADQAEADAAAFQAAAEgEADQgDADgHAAIgZAAIAAgFQgHAEgIACQgHADgHAAQgYAAgOgOgAgeAAQgJAHAAANQAAAMAIAHQAJAIAPAAQAMAAAJgIQAIgHAAgMQAAgNgJgHQgJgJgLAAQgOAAgJAJg");
	this.shape_23.setTransform(451.3,274.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgtA2QgPgOAAgUQAAgUAPgPQAPgPAWAAQAIAAAGADQAIACAIAFIAAgaIgEAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAZAAIAABuIAEAAQAHAAADADQAEADAAAFQAAAEgEADQgDADgHAAIgZAAIAAgFQgHAEgIACQgHADgHAAQgYAAgOgOgAgeAAQgJAHAAANQAAAMAIAHQAJAIAPAAQAMAAAJgIQAIgHAAgMQAAgNgJgHQgJgJgLAAQgOAAgJAJg");
	this.shape_24.setTransform(438.7,274.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgsAoQgKgJAAgLQAAgNANgJQAOgLAYAAQAHAAANACIAAgFQAAgFgEgDQgEgDgKAAQgJAAgPAEIgJABQgEAAgDgDQgDgDAAgFIABgEIADgEIAIgCIAQgEIAOgBQASAAALAIQALAJAAAOIAAAqIADAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgYAAIAAgFQgIAEgJACQgIACgIAAQgRAAgLgJgAgbAMQgFAEAAAEQAAADACACQAGADAIAAQAIAAAIgDQAJgDAIgFIAAgJQgNgCgJAAQgMAAgKAGg");
	this.shape_25.setTransform(425.8,276.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag4AKQgIAAgDgDQgDgDAAgEQAAgDADgDQADgDAIAAIBxAAQAIAAADADQADADAAADQAAAEgDADQgDADgIAAg");
	this.shape_26.setTransform(413.1,286.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_27.setTransform(400.3,276.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWA4QgJgJAAgMIAAgsIgIAAQgIAAgDgDQgDgDAAgFQAAgFADgCQADgDAIAAIAIAAIAAgTQAAgIADgDQADgDAEAAQAFAAADADQADADAAAIIAAATIAlAAQAHAAAEADQACACAAAFQAAAFgCADQgEADgHAAIglAAIAAAoQAAAHADACQAEADAJAAQAQAAAOgHQAFgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgKgIg");
	this.shape_28.setTransform(388.5,274.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAIANABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_29.setTransform(375.3,276.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQARgOAUAAQALAAALAEQALAFAFAFQAIAIAEALQAEAIAAAIIAAAJIhVAAQAEAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgEAEgQAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA8AAQgEgJgIgFQgIgEgKAAQgJAAgIAEg");
	this.shape_30.setTransform(343.6,276.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAhAvIAAhAQAAgEgCgCQgCgCgDAAQgDAAgDACQgFACgFAHIAAApQAHAAADADQADACAAAFQAAAEgDAEQgDACgIAAIgSAAIAAhAQAAgEgCgCQgCgCgDAAQgDAAgEACQgEADgFAGIAAApQAHAAADADQADACAAAFQAAAEgDAEQgDACgIAAIgTAAQgHAAgEgCQgDgEAAgEQAAgFADgCQAEgDAGAAIAAgxQgGgBgEgCQgDgEAAgEQAAgFADgDQAEgCAHAAIAUAAIAAAFQAFgEAFgCQADgDAGAAQAFAAAEADQAEACADAEQAFgEAGgCQAFgDAGAAQAMAAAIAHQAJAIAAANIAAAuQAGAAAEADQADACAAAFQAAAEgDAEQgEACgHAAg");
	this.shape_31.setTransform(331.3,276);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgsAoQgKgJAAgLQAAgNANgJQAOgLAYAAQAHAAANACIAAgFQAAgFgEgDQgEgDgKAAQgJAAgPAEIgJABQgEAAgDgDQgDgDAAgFIABgEIADgEIAIgCIAQgEIAOgBQASAAALAIQALAJAAAOIAAAqIADAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgYAAIAAgFQgIAEgJACQgIACgIAAQgRAAgLgJgAgbAMQgFAEAAAEQAAADACACQAGADAIAAQAIAAAIgDQAJgDAIgFIAAgJQgNgCgJAAQgMAAgKAGg");
	this.shape_32.setTransform(318.7,276.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAYAvQgHAAgDgCQgEgEAAgEQAAgFADgCQAEgDAGAAIAAgmQAAgHgDgEQgFgDgKAAQgFAAgGADQgFADgJAIIAAAmQAJAAACABQAFADAAAGQAAAEgDAEQgDACgIAAIgYAAQgIAAgDgCQgDgEAAgEQAAgGAFgDQACgBAIAAIAAgxQgGgBgDgCQgEgEAAgEQAAgFAEgDQADgCAHAAIAUAAIAAAGQAGgFAHgCQAHgDAGAAQATAAALAMQAIAKAAAOIAAAmQAHAAADADQADACAAAFQAAAEgDAEQgDACgIAAg");
	this.shape_33.setTransform(305.9,276);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag4AKQgIAAgDgDQgDgDAAgEQAAgDADgDQADgDAIAAIBxAAQAIAAADADQADADAAADQAAAEgDADQgDADgIAAg");
	this.shape_34.setTransform(293.4,286.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_35.setTransform(280.6,276.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgWA4QgJgJAAgMIAAgsIgIAAQgIAAgDgDQgDgDAAgFQAAgFADgCQADgDAIAAIAIAAIAAgTQAAgIADgDQADgDAEAAQAFAAADADQADADAAAIIAAATIAlAAQAHAAAEADQACACAAAFQAAAFgCADQgEADgHAAIglAAIAAAoQAAAHADACQAEADAJAAQAQAAAOgHQAFgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgKgIg");
	this.shape_36.setTransform(268.8,274.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAIANABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_37.setTransform(255.6,276.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgtA2QgPgOAAgUQAAgUAPgPQAPgPAWAAQAIAAAGADQAIACAIAFIAAgaIgEAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAZAAIAABuIAEAAQAHAAADADQAEADAAAFQAAAEgEADQgDADgHAAIgZAAIAAgFQgHAEgIACQgHADgHAAQgYAAgOgOgAgeAAQgJAHAAANQAAAMAIAHQAJAIAPAAQAMAAAJgIQAIgHAAgMQAAgNgJgHQgJgJgLAAQgOAAgJAJg");
	this.shape_38.setTransform(212.7,271.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgiBCQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAZAAIAAgxIgRAAQgHAAgEgDQgDgDAAgEQAAgFADgDQAEgDAHAAIAkAAIAABGIAZAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAgAgQgqIAAgXIAXAAIAAAXg");
	this.shape_39.setTransform(199.6,271.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag4AKQgIAAgDgDQgDgCAAgFQAAgDADgDQADgDAIAAIBxAAQAIAAADADQADADAAADQAAAEgDADQgDADgIAAg");
	this.shape_40.setTransform(187,283.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_41.setTransform(174.3,273.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgWA4QgJgJAAgMIAAgsIgIAAQgHAAgEgDQgDgDAAgFQAAgFADgCQAEgDAHAAIAIAAIAAgTQAAgIADgDQACgDAGAAQAEAAADADQADADAAAIIAAATIAkAAQAJAAACADQADACABAFQgBAFgDADQgCADgJAAIgkAAIAAAoQAAAHADACQAEADAJAAQAQAAAOgHQAFgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgRAAgLgIg");
	this.shape_42.setTransform(162.5,272.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAIANABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_43.setTransform(149.2,273.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},134).wait(1));

	// CombinedRow5
	this.instance_2 = new lib.CombinedRow5();
	this.instance_2.setTransform(465.2,206,1,1,0,0,0,360,20);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(114).to({_off:false},0).to({x:480,y:391.5},10,cjs.Ease.get(0.2)).wait(11));

	// RowLeft3
	this.instance_3 = new lib.LeftRow3();
	this.instance_3.setTransform(190,150,1,1,0,0,0,180,20);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(97).to({_off:false},0).to({x:285.2,y:206},17,cjs.Ease.get(0.2)).to({_off:true},1).wait(20));

	// RowLeft2
	this.instance_4 = new lib.LeftRow2();
	this.instance_4.setTransform(190,110,1,1,0,0,0,180,19.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).to({x:300,y:351.4},17,cjs.Ease.get(0.2)).wait(55));

	// RowRight1
	this.instance_5 = new lib.RightRow1();
	this.instance_5.setTransform(770,70.1,1,1,0,0,0,180,20);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).to({x:645.2,y:206},17,cjs.Ease.get(0.2)).to({_off:true},1).wait(20));

	// RowLeft1
	this.instance_6 = new lib.LeftRow1();
	this.instance_6.setTransform(190,70.1,1,1,0,0,0,180,20);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({x:300,y:311.5},17,cjs.Ease.get(0.2)).wait(99));

	// NullRowRight2
	this.instance_7 = new lib.NullRow3("synched",0);
	this.instance_7.setTransform(660,351.5,1,1,0,0,0,180,20);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80).to({_off:false},0).to({alpha:1},7).wait(48));

	// NullRowRight1
	this.instance_8 = new lib.NullRow3("synched",0);
	this.instance_8.setTransform(660,311.5,1,1,0,0,0,180,20);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(37).to({_off:false},0).to({alpha:1},7).wait(91));

	// Indicator
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0066").ss(6,1,1).p("A5NABIAADFMA4OAAAIAAmLMg4OAAAIAADGIgrArA54goIhohoIAoCRIgoCSIBohnA54goIAABUA5NABIgrgpA64ABIkIAA");
	this.shape_44.setTransform(751.5,69.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0066").s().p("AgLAAIgniRIBlBoIAABTIhlBog");
	this.shape_45.setTransform(580.5,70.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0066").ss(6,1,1).p("AZ5goIBohoIgoCRIAoCSIhohnAZOABIArgpIAABUAZOABIAADFMg4OAAAIAAmLMA4OAAAIAADGIArArAa5ABIEIAA");
	this.shape_46.setTransform(208.5,70.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0066").s().p("AgyArIAAhVIBlhnIgnCRIAnCSg");
	this.shape_47.setTransform(379.5,70.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.749)").s().p("EhJbAGPIAAsdMA4QAAAIAAMdgARMAAIAAmOMA4QAAAIAAGOg");
	this.shape_48.setTransform(480,130);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0066").ss(6,1,1).p("A5NABIAADFMA4OAAAIAAmLMg4OAAAIAADGIgrgpIAABUA5NABIgrArA64ABIgoCSIBohnA64ABIkIAAA54goIhohoIAoCR");
	this.shape_49.setTransform(751.5,109.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0066").s().p("AgLAAIgniRIBlBnIAABVIhlBng");
	this.shape_50.setTransform(580.5,110.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.749)").s().p("EhJbAJXIAAsdMA4QAAAIAAMdgARMjHIAAmPMA4QAAAIAAGPg");
	this.shape_51.setTransform(480,110);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0066").ss(6,1,1).p("AZOABIArArAZ5goIAABUAa5ABIAoCSIhohnAZOABIAADFMg4OAAAIAAmLMA4OAAAIAADGIArgpIBohoIgoCRIEIAA");
	this.shape_52.setTransform(208.5,109.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.749)").s().p("EhJbAJXIAAmSMA4QAAAIAAGSgARMDHIAAmNMA4QAAAIAAGNgEhJbgDEIAAmSMA4QAAAIAAGSg");
	this.shape_53.setTransform(480,110);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.749)").s().p("EhJbAJXIAAmSMA4QAAAIAAGSgEhJbgDEIAAmSMA4QAAAIAAGSgARMjHIAAmPMA4QAAAIAAGPg");
	this.shape_54.setTransform(480,110);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0066").ss(6,1,1).p("AZ5goIBohoIgoCRIAoCSIhohnAZOABIArArAZOABIAADFMg4OAAAIAAmLMA4OAAAIAADGIArgpIAABUAa5ABIEIAA");
	this.shape_55.setTransform(208.5,149.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0066").s().p("AgyAqIAAhTIBlhoIgnCRIAnCSg");
	this.shape_56.setTransform(379.5,150);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.749)").s().p("EhJbAGPIAAsdMA4QAAAIAAMdgARMGNIAAmOMA4QAAAIAAGOg");
	this.shape_57.setTransform(480,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48,p:{y:130}},{t:this.shape_47,p:{y:70.3}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_47,p:{y:70.3}},{t:this.shape_46},{t:this.shape_50,p:{y:110.1}},{t:this.shape_49,p:{y:109.9}}]},9).to({state:[{t:this.shape_51},{t:this.shape_47,p:{y:70.3}},{t:this.shape_46},{t:this.shape_50,p:{y:110.1}},{t:this.shape_49,p:{y:109.9}}]},9).to({state:[{t:this.shape_53},{t:this.shape_47,p:{y:110.1}},{t:this.shape_52},{t:this.shape_45},{t:this.shape_44}]},26).to({state:[{t:this.shape_54},{t:this.shape_47,p:{y:110.1}},{t:this.shape_52},{t:this.shape_50,p:{y:110.1}},{t:this.shape_49,p:{y:109.9}}]},9).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_45},{t:this.shape_44}]},34).to({state:[{t:this.shape_48,p:{y:90}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_50,p:{y:109.8}},{t:this.shape_49,p:{y:109.7}}]},37).to({state:[]},9).wait(1));

	// TableText
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgtA2QgPgOAAgUQAAgUAPgPQAPgPAWAAQAIAAAGADQAIACAIAFIAAgaIgEAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAZAAIAABuIAEAAQAHAAADADQAEADAAAFQAAAEgEADQgDADgHAAIgZAAIAAgFQgHAEgIACQgHADgHAAQgYAAgOgOgAgeAAQgJAHAAANQAAAMAIAHQAJAIAPAAQAMAAAJgIQAIgHAAgMQAAgNgJgHQgJgJgLAAQgOAAgJAJg");
	this.shape_58.setTransform(903,109.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgnAvQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAMAAIAAgxIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAAAOQAMgKAHgDQAIgEAHABQAKAAAJAHQAHAGAAAFQAAAEgDAEQgDADgFAAQgEAAgEgEQgEgFgEAAQgEABgJAFQgIAGgMALIAAAdIAcAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_59.setTransform(890.2,110.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgpA9QgGgEAAgGQAAgFADgDQADgDAEAAQADAAADACQAFAEAEABQAGABALAAQAQAAAIgFQAIgEAAgJQAAgGgEgGQgFgHgIgDQgFgCgJgBQgFAAgDgCQgDgDAAgDQAAgFADgDQADgCAFAAIAJAAQAEgBAFgCQAEgDACgDQADgEAAgFQAAgGgGgFQgGgFgLAAQgOAAgIAIIgEAEIgFABQgEAAgDgDQgDgDAAgFQAAgHAJgGQAOgKATAAQATAAAMALQAMALAAAPQAAAJgEAHQgDAHgHAGQAJAEAFAJQAEAIAAAKQAAALgGAKQgGAJgLAGQgMAEgRAAQgYAAgNgIg");
	this.shape_60.setTransform(877.3,109);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgWA4QgJgJAAgMIAAgsIgIAAQgHAAgEgDQgDgDAAgFQAAgFADgCQAEgDAHAAIAIAAIAAgTQAAgIADgDQACgDAGAAQAEAAADADQADADAAAIIAAATIAkAAQAJAAACADQADACABAFQgBAFgDADQgCADgJAAIgkAAIAAAoQAAAHACACQAFADAJAAQAQAAANgHQAGgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgRAAgLgIg");
	this.shape_61.setTransform(903.2,69.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAQAGAAAHABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_62.setTransform(889.9,71);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgeBEQgIgBgDgDQgDgDAAgEQAAgEADgDQADgEAIAAIAVAAIAAhVIgTAFIgHABQgEAAgCgDQgDgDAAgFQAAgEACgDQACgCAHgCIArgMIAABxIAVAAQAIAAADAEQADADAAAEQAAAEgDADQgDADgIABg");
	this.shape_63.setTransform(877.3,68.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUBAQgIgGgJgPQgHgPgBgRIAAgVQAAgVANgSQAMgTAUAAQAMAAAJAFQAIAGAJAPQAHAPABARIAAAVQAAAVgNASQgMATgVAAQgLAAgJgFgAgOgoQgJAMAAASIAAAVQAAASAKAMQAFAHAIAAQAJAAAGgIQAJgLAAgSIAAgVQABgRgLgNQgEgHgKAAQgIAAgGAHg");
	this.shape_64.setTransform(795.1,109);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgXBAQgLgFgFgJQgFgJAAgLQAAgJAEgIQAEgIAIgFQgHgFgEgIQgDgHAAgJQAAgQAMgMQAMgLASAAQATAAAMALQAMAMAAAQQAAAJgDAHQgEAIgHAFQAIAFAEAIQAEAIAAAJQAAALgFAJQgFAJgLAFQgLAFgNAAQgMAAgLgFgAgQAQQgHAHAAAJQAAAHAGAEQAGAFALAAQAMAAAGgFQAGgEAAgIQAAgIgHgHQgHgGgKAAQgJAAgHAGgAgPgpQgGAFAAAHQAAAJAGAFQAGAGAJgBQAKABAGgGQAGgFAAgJQAAgHgGgFQgGgGgKAAQgJAAgGAGg");
	this.shape_65.setTransform(782.5,109);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AADBCQgGAAgDgDQgDgDAAgFQAAgEADgDQADgDAGAAIAIAAIAAgJIg3AAIAAgRIAwhUIAcAAIAABQQAHAAADADQADADAAAFQAAAEgDADQgDADgHAAIAAAJQAHAAADADQADADAAAEQAAAFgDADQgDADgIAAgAgRAPIAcAAIAAgxg");
	this.shape_66.setTransform(769.7,109);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgNA/QgJgCgHgFIgFAFIgEABQgFAAgDgEQgDgDAAgHIAAgPQAAgHADgDQADgEAFAAQAEAAACACQADACABAFIADAGQADADAHAEQAIADAHAAQAOAAAJgHQAGgEAAgGQAAgDgDgEQgDgDgGgDIgRgEQgRgDgIgFQgJgCgFgIQgGgIAAgKQAAgPANgLQANgMATAAQAHAAAHACQAHACAFAEQAFgEAEAAQAEAAADADQADADAAAIIAAAPQAAAIgDADQgDADgEAAQgEAAgDgCQgCgCgBgFIgDgHQgDgEgGgDQgGgDgHAAQgKAAgHAGQgHAFAAAGQAAAEADADQADAEAFACIASAEQAQAEAJADQAIACAGAIQAGAIAAAMQAAAPgLAKQgPAMgWAAQgHAAgIgCg");
	this.shape_67.setTransform(757.3,109.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgaA5QgMgGgIgNQgJgOAAgPIAAgNQAAgQAIgOQAIgOANgIQAOgIANAAQAJAAAIACQAIACAHAFIAEgEQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAADAEQACADAAAHIAAASQAAAIgCADQgDADgFAAQgEAAgDgCQgCgCgCgHQAAgEgCgDQgFgEgHgDQgIgDgHAAQgIAAgIAEQgIAFgGAJQgGAJAAANIAAALQAAAQALAKQALAKASAAQAMAAAIgDQAEgCAGgGIAFgEIAEgBQAEAAAEADQADADAAAFQAAAEgFAFQgGAHgKAEQgNAGgQAAQgRAAgPgIg");
	this.shape_68.setTransform(744.7,109.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGA/QgDgDAAgEIACgHIAehdIguAAQgBAGgCADQgDADgFAAQgEAAgDgEQgDgDAAgHIAAgTIBZAAIAAAVIgiBjQgCAHgDACQgCACgEAAQgCAAgEgDg");
	this.shape_69.setTransform(794.9,69);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgoA6QgHgFgBgGQABgFADgDQADgDAEAAQADAAAFAEQAEADAEABQAIACAJAAQASAAAGgGQAIgGgBgNQAAgMgGgHQgHgFgLAAQgJAAgPAFQgDACgCAAQgFAAgCgDQgDgCAAgFIAAg8IA+AAQAHAAADADQADACAAAFQAAAFgDADQgDADgHAAIgqAAIAAAZQAMgEAHAAQAUAAANANQAMALAAAVQAAAWgMAMQgNAMgZAAQgYAAgOgJg");
	this.shape_70.setTransform(782.5,69.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AADBCQgGAAgDgDQgDgDAAgFQAAgEADgDQADgDAGAAIAIAAIAAgJIg3AAIAAgRIAwhUIAcAAIAABQQAHAAADADQADADAAAFQAAAEgDADQgDADgHAAIAAAJQAHAAADADQADADAAAEQAAAFgDADQgDADgIAAgAgRAPIAcAAIAAgxg");
	this.shape_71.setTransform(769.7,69);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgNA/QgJgCgHgFIgFAFIgEABQgFAAgDgEQgDgDAAgHIAAgPQAAgHADgDQADgEAFAAQAEAAACACQADACABAFIADAGQADADAHAEQAIADAHAAQAOAAAJgHQAGgEAAgGQAAgDgDgEQgDgDgGgDIgRgEQgRgDgIgFQgJgCgFgIQgGgIAAgKQAAgPANgLQANgMATAAQAHAAAHACQAHACAFAEQAFgEAEAAQAEAAADADQADADAAAIIAAAPQAAAIgDADQgDADgEAAQgEAAgDgCQgCgCgBgFIgDgHQgDgEgGgDQgGgDgHAAQgKAAgHAGQgHAFAAAGQAAAEADADQADAEAFACIASAEQAQAEAJADQAIACAGAIQAGAIAAAMQAAAPgLAKQgPAMgWAAQgHAAgIgCg");
	this.shape_72.setTransform(757.3,69.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgaA5QgMgGgIgNQgJgOAAgPIAAgNQAAgQAIgOQAIgOANgIQAOgIANAAQAJAAAIACQAIACAHAFIAEgEQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAADAEQACADAAAHIAAASQAAAIgCADQgDADgFAAQgEAAgDgCQgCgCgCgHQAAgEgCgDQgFgEgHgDQgIgDgHAAQgIAAgIAEQgIAFgGAJQgGAJAAANIAAALQAAAQALAKQALAKASAAQAMAAAIgDQAEgCAGgGIAFgEIAEgBQAEAAAEADQADADAAAFQAAAEgFAFQgGAHgKAEQgNAGgQAAQgRAAgPgIg");
	this.shape_73.setTransform(744.7,69.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AglAxQgUgTAAgeQAAgdAUgTQARgQAUAAQAXAAASATQASATAAAaQAAAcgSASQgSATgXAAQgUAAgRgQgAgZgeQgLANgBARQABATALAMQAMANANAAQAOAAAMgNQAMgMAAgTQAAgSgMgMQgMgNgOAAQgNAAgMANg");
	this.shape_74.setTransform(322.5,149.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgpA+QgIAAgDgDQgDgDAAgFQAAgEADgDQAEgDAHAAIADAAIAAhRIgDAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIBhAAIAAAhQAAAHgDADQgDAEgFAAQgFAAgCgEQgDgDAAgHIAAgMIg0AAIAAAfIARAAQAAgIABgDQAEgFAFAAQAFAAADAEQACADAAAHIAAAXQAAAHgCADQgDAEgFAAQgFAAgEgFQgBgDAAgIIgRAAIAAAfIATAAQAIAAADADQAEADAAAEQAAAFgEADQgDADgIAAg");
	this.shape_75.setTransform(310.3,149.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgNA/QgJgCgHgFIgFAFIgEABQgFAAgDgEQgDgDAAgHIAAgPQAAgHADgDQADgEAFAAQAEAAACACQADACABAFIADAGQADADAHAEQAIADAHAAQAOAAAJgHQAGgEAAgGQAAgDgDgEQgDgDgGgDIgRgEQgRgDgIgFQgJgCgFgIQgGgIAAgKQAAgPANgLQANgMATAAQAHAAAHACQAHACAFAEQAFgEAEAAQAEAAADADQADADAAAIIAAAPQAAAIgDADQgDADgEAAQgEAAgDgCQgCgCgBgFIgDgHQgDgEgGgDQgGgDgHAAQgKAAgHAGQgHAFAAAGQAAAEADADQADAEAFACIASAEQAQAEAJADQAIACAGAIQAGAIAAAMQAAAPgLAKQgPAMgWAAQgHAAgIgCg");
	this.shape_76.setTransform(297.3,149.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgWA4QgJgJAAgMIAAgsIgIAAQgIAAgCgDQgEgDAAgFQAAgFAEgCQACgDAIAAIAIAAIAAgTQAAgIADgDQADgDAEAAQAFAAADADQADADAAAIIAAATIAlAAQAIAAADADQACACAAAFQAAAFgCADQgDADgIAAIglAAIAAAoQAAAHADACQAEADAJAAQAQAAAOgHQAFgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgKgIg");
	this.shape_77.setTransform(348.4,109.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAYAvQgHAAgDgDQgEgDAAgEQAAgFADgDQAEgDAGAAIAAglQAAgHgDgDQgFgFgKAAQgFAAgGADQgFAEgJAJIAAAkQAJABACABQAFADAAAGQAAAEgDADQgDADgIAAIgYAAQgIAAgDgDQgDgDAAgEQAAgGAFgDQACgBAIgBIAAgxQgGAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAUAAIAAAIQAGgFAHgDQAHgDAGABQATAAALALQAIAJAAAQIAAAkQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_78.setTransform(335.1,110.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgaArQgNgHgHgLQgHgMAAgMQAAgLAHgMQAHgMANgHQANgHANAAQAOAAANAHQANAHAHAMQAHAMAAALQAAAMgHALQgHAMgNAGQgNAHgOAAQgNAAgNgGgAgWgSQgKAJAAAKQAAAKAKAJQAJAIANAAQAOAAAJgIQAKgJAAgKQAAgIgHgJQgKgLgQAAQgNAAgJAJg");
	this.shape_79.setTransform(322.5,111);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAhAvIAAhAQAAgFgCgCQgCgCgDAAQgDAAgDACQgFADgFAHIAAAoQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgSAAIAAhAQAAgFgCgCQgCgCgDAAQgDABgEACQgEACgFAHIAAAoQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgTAAQgHAAgEgDQgDgDAAgEQAAgFADgDQADgDAHAAIAAgxQgHAAgDgDQgDgDAAgEQAAgFADgDQAEgDAHAAIAUAAIAAAHQAFgGAFgCQADgBAGAAQAFgBAEADQAEACADAFQAGgFAFgCQAGgDAFABQAMAAAHAGQAKAIAAAOIAAAsQAGAAAEADQADADAAAFQAAAEgDADQgEADgHAAg");
	this.shape_80.setTransform(310,110.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQAQgOAVAAQALAAALAEQALAFAFAFQAIAIAEALQAEAIAAAIIAAAJIhVAAQAEAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgEAEgQAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA8AAQgEgJgIgFQgIgEgKAAQgJAAgIAEg");
	this.shape_81.setTransform(297.2,111);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgnAvQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAMAAIAAgxIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAAAOQAMgKAHgDQAIgEAHABQAKAAAJAHQAHAGAAAFQAAAEgDAEQgDADgFAAQgEAAgEgEQgEgFgEAAQgEABgJAFQgIAGgMALIAAAdIAcAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAg");
	this.shape_82.setTransform(285,110.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgpA+QgIAAgDgDQgDgDAAgFQAAgEADgDQAEgDAHAAIADAAIAAhRIgDAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIBhAAIAAAhQAAAHgDADQgDAEgFAAQgFAAgDgEQgCgDAAgHIAAgMIg0AAIAAAfIARAAQAAgIABgDQAEgFAFAAQAFAAADAEQACADAAAHIAAAXQAAAHgCADQgDAEgFAAQgFAAgEgFQgBgDAAgIIgRAAIAAAfIATAAQAIAAADADQAEADAAAEQAAAFgEADQgDADgIAAg");
	this.shape_83.setTransform(272.5,109.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQARgOAUAAQALAAALAEQALAFAFAFQAIAIAEALQAEAIAAAIIAAAJIhVAAQAEAIAIAFQAJAFAMAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgEAEgQAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA8AAQgEgJgIgFQgIgEgKAAQgJAAgIAEg");
	this.shape_84.setTransform(353.9,71);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAQAGAAAHABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_85.setTransform(341.4,71);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgaArQgNgHgHgLQgHgMAAgMQAAgLAHgMQAHgMANgHQANgHANAAQAOAAANAHQANAHAHAMQAHAMAAALQAAAMgHALQgHAMgNAGQgNAHgOAAQgNAAgNgGgAgWgSQgKAJAAAKQAAAKAKAJQAJAIANAAQAOAAAJgIQAKgJAAgKQAAgIgHgJQgKgLgQAAQgNAAgJAJg");
	this.shape_86.setTransform(328.8,71);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("Ag5AxIAAgiQAAgIADgDQACgDAFAAQAFAAADADQADADAAAIIAAAUQAOAHAKAAQAGAAAGgCQADgDADgDQADgEABgDIABgJIAAg7IgYAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAHAAIA5AAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgMAAIAAA+QAAAMgEAHQgGALgMAGQgKAGgMAAQgRAAgcgOg");
	this.shape_87.setTransform(316.9,69.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAYAwQgHgBgDgDQgEgDAAgEQAAgEADgDQAEgEAGAAIAAglQAAgHgDgDQgFgFgKAAQgFAAgGAEQgFACgJAKIAAAkQAJABACABQAFADAAAGQAAAEgDADQgDADgIABIgYAAQgIgBgDgDQgDgDAAgEQAAgGAFgDQACgBAIgBIAAgwQgGgBgDgDQgEgDAAgEQAAgFAEgCQADgEAHAAIAUAAIAAAHQAGgEAHgDQAHgDAGABQATAAALALQAIAJAAAQIAAAkQAHAAADAEQADADAAAEQAAAEgDADQgDADgIABg");
	this.shape_88.setTransform(291,70.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgsAoQgKgJAAgLQAAgNANgJQAOgLAYAAQAHAAANACIAAgFQAAgFgEgDQgEgDgKAAQgJAAgPAEIgJABQgEAAgDgDQgDgDAAgFIABgEIADgEIAIgCIAQgEIAOgBQASAAALAIQALAJAAAOIAAAqIADAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgYAAIAAgFQgIAEgJACQgIACgIAAQgRAAgLgJgAgbAMQgFAEAAAEQAAADACACQAGADAIAAQAIAAAIgDQAJgDAIgFIAAgJQgNgCgJAAQgMAAgKAGg");
	this.shape_89.setTransform(278.6,71);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgNA/QgJgCgHgFIgFAFIgEABQgFAAgDgEQgDgDAAgHIAAgPQAAgHADgDQADgEAFAAQAEAAACACQADACABAFIADAGQADADAHAEQAIADAHAAQAOAAAJgHQAGgEAAgGQAAgDgDgEQgDgDgGgDIgRgEQgRgDgIgFQgJgCgFgIQgGgIAAgKQAAgPANgLQANgMATAAQAHAAAHACQAHACAFAEQAFgEAEAAQAEAAADADQADADAAAIIAAAPQAAAIgDADQgDADgEAAQgEAAgDgCQgCgCgBgFIgDgHQgDgEgGgDQgGgDgHAAQgKAAgHAGQgHAFAAAGQAAAEADADQADAEAFACIASAEQAQAEAJADQAIACAGAIQAGAIAAAMQAAAPgLAKQgPAMgWAAQgHAAgIgCg");
	this.shape_90.setTransform(265.8,69.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAdA+Ig0hTIAAA+IAHAAQAIAAADADQADADABAEQgBAFgDADQgDADgIAAIgcAAQgHAAgDgDQgEgDABgFQgBgEAEgDQADgDAGAAIAAhRIgCAAQgIAAgDgCQgEgDAAgFQAAgFAEgDQADgDAIAAIAYAAIA0BTIAAg+IgIAAQgHAAgEgCQgDgDAAgFQAAgFADgDQAEgDAHAAIAcAAQAHAAADADQADADAAAFQAAAFgDADQgDACgGAAIAABmg");
	this.shape_91.setTransform(202.4,149.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAZA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAFAAIgFgNIgxAAIgFANIAFAAQAHAAAEADQADADAAAEQAAAFgDADQgEADgHAAIgcAAQgIAAgDgDQgDgDAAgFQAAgFADgDQADgCAIAAIAhhRIgOAAQgHAAgDgCQgEgDAAgFQAAgFAEgDQADgDAHAAIAsAAIAqBmQAHAAACABQAFAEAAAFQAAAFgDADQgDADgIAAgAgQAHIAgAAIgQgog");
	this.shape_92.setTransform(189.9,149.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgIA+IgshmQgHAAgDgBQgEgDgBgGQAAgFAEgDQADgDAHAAIAdAAQAHAAAEADQADADAAAFQAAAFgDADQgEACgHAAIgFAAIAdBHIAehHIgFAAQgHAAgDgCQgEgDAAgFQAAgFAEgDQADgDAHAAIAcAAQAIAAADADQAEADAAAFQgBAGgFADQgCABgHAAIgsBmg");
	this.shape_93.setTransform(177.3,149.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgXA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAOAAIAAgfIgjgyQgHAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIATAAQAHAAAEADQADADAAAFQAAAHgIADIASAeIATgeQgFgBgCgDQgCgDAAgDQAAgFAEgDQADgDAHAAIAUAAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgiAyIAAAfIAOAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_94.setTransform(215.1,109.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgpA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAMAAIAAhRIgMAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIArAAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgKAAIAABRIArAAIAAgUQAAgIADgDQADgDAFAAQAEAAADADQADADAAAIIAAApg");
	this.shape_95.setTransform(202.6,109.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgpA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAMAAIAAhRIgMAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIArAAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgKAAIAABRIArAAIAAgUQAAgIADgDQADgDAFAAQAEAAADADQADADAAAIIAAApg");
	this.shape_96.setTransform(190,109.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgeA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAVAAIAAhRIgVAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIA9AAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgVAAIAABRIAVAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_97.setTransform(177.3,109.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgrA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIADAAIAAhRIgDAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIAyAAQATAAAMALQALAKAAAPQAAAHgDAGQgCAGgGAFQAKAEAFAIQAFAIAAAKQAAAIgDAHIgHAIQgFAEgIADQgHADgMAAgAgTApIAiAAQANAAAFgEQAEgDAAgFQAAgHgIgGQgIgGgOAAIgaAAgAgTgJIAVAAQAMAAAJgGQAFgEAAgHQAAgFgFgEQgFgFgMAAIgZAAg");
	this.shape_98.setTransform(164.6,109.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgXA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAOAAIAAgfIgjgyQgHAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIATAAQAHAAAEADQADADAAAFQAAAHgIADIASAeIATgeQgFgBgCgDQgCgDAAgDQAAgFAEgDQADgDAHAAIAUAAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgiAyIAAAfIAOAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_99.setTransform(215.1,69.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAZA+QgIAAgDgDQgCgDAAgFQAAgEACgDQADgDAIAAIAIAAIAAg9IgYA0IgQAAIgZg0IAAA9IAIAAQAHAAAEADQADADAAAEQAAAFgDADQgEADgHAAIgcAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAGAAIAAhRQgFAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAXAAIAbA+IAcg+IAXAAQAHAAAEADQADADAAAFQAAAEgDADQgCADgGAAIAABRQAHAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_100.setTransform(202.6,69.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAZA+QgIAAgDgDQgCgDAAgFQAAgEACgDQADgDAIAAIAIAAIAAg9IgYA0IgQAAIgZg0IAAA9IAIAAQAHAAAEADQADADAAAEQAAAFgDADQgEADgHAAIgcAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAGAAIAAhRQgFAAgDgDQgDgDAAgEQAAgFADgDQAEgDAHAAIAXAAIAbA+IAcg+IAXAAQAHAAAEADQADADAAAFQAAAEgDADQgCADgGAAIAABRQAHAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_101.setTransform(190,69.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgeA+QgIAAgDgDQgDgDAAgFQAAgEADgDQADgDAIAAIAVAAIAAhRIgVAAQgIAAgDgCQgDgDAAgFQAAgFADgDQADgDAIAAIA9AAQAIAAADADQADADAAAFQAAAFgDADQgDACgIAAIgVAAIAABRIAVAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAg");
	this.shape_102.setTransform(177.3,69.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("Ag5AxIAAgiQAAgIADgDQACgDAFAAQAFAAADADQADADAAAIIAAAUQAOAHAKAAQAGAAAGgCQADgDADgDQADgEABgDIABgJIAAg7IgYAAQgHAAgEgDQgDgDAAgFQAAgEADgDQAEgDAHAAIA5AAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgMAAIAAA+QAAAMgEAHQgGALgMAGQgKAGgMAAQgRAAgcgOg");
	this.shape_103.setTransform(165.4,69.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AADBCQgGAAgDgDQgDgDAAgFQAAgEADgDQADgDAGAAIAIAAIAAgJIg3AAIAAgRIAwhUIAcAAIAABQQAHAAADADQADADAAAFQAAAEgDADQgDADgHAAIAAAJQAHAAADADQADADAAAEQAAAFgDADQgDADgIAAgAgRAPIAcAAIAAgxg");
	this.shape_104.setTransform(649.6,109);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgpA+QgGgFAAgGQAAgEADgDQADgEAEAAQADAAADACQAFAEAEABQAGABALAAQAQAAAIgEQAIgGAAgIQAAgHgEgFQgFgHgIgDQgFgCgJgBQgFAAgDgDQgDgCAAgDQAAgEADgEQADgDAFAAIAJAAQAEAAAFgCQAEgCACgFQADgEAAgEQAAgGgGgFQgGgFgLAAQgOAAgIAIIgEAEIgFABQgEAAgDgDQgDgDAAgEQAAgHAJgIQAOgJATAAQATAAAMALQAMALAAAPQAAAJgEAHQgDAHgHAGQAJAEAFAJQAEAIAAAKQAAALgGAKQgGAJgLAGQgMAEgRAAQgYAAgNgHg");
	this.shape_105.setTransform(649.8,69);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgpA+QgGgFAAgGQAAgEADgDQADgDAEAAQADAAADACQAFACAEABQAGACALAAQAQAAAIgEQAIgFAAgJQAAgHgEgFQgFgGgIgEQgFgCgJAAQgFgBgDgDQgDgCAAgDQAAgEADgDQADgEAFAAIAJAAQAEAAAFgDQAEgBACgFQADgDAAgFQAAgGgGgFQgGgFgLAAQgOAAgIAJIgEADIgFABQgEAAgDgDQgDgDAAgEQAAgIAJgHQAOgJATAAQATAAAMALQAMALAAAPQAAAJgEAHQgDAHgHAGQAJAEAFAIQAEAJAAAKQAAALgGAKQgGAKgLAEQgMAFgRAAQgYAAgNgHg");
	this.shape_106.setTransform(69.9,149);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AguBDIAAgWQA2gtAMgNQAGgHAAgGQAAgIgHgGQgGgFgMAAQgJgBgHAHQgEADgDAIQgBADgCACQgDACgEAAQgEAAgDgDQgDgDAAgEQAAgGAFgJQAGgJALgGQALgGALAAQAUAAAMANQANAMAAARQAAAJgDAHQgEAHgOALIgoAlIAsAAQADgCAEAAQAFAAADACQACAEAAAHIAAAKg");
	this.shape_107.setTransform(69.5,108.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgeBEQgIgBgDgDQgDgDAAgEQAAgEADgDQADgEAIAAIAVAAIAAhVIgTAFIgHABQgEAAgCgDQgDgDAAgFQAAgEACgDQACgCAHgCIArgMIAABxIAVAAQAIAAADAEQADADAAAEQAAAEgDADQgDADgIABg");
	this.shape_108.setTransform(69.9,68.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgnAwQgIgBgDgDQgDgDAAgEQAAgEADgDQADgEAIAAIAMAAIAAgwIgHAAQgIgBgDgDQgDgDAAgEQAAgFADgCQADgEAIAAIAcAAIAAAOQAMgKAHgDQAIgDAHAAQAKAAAJAHQAHAGAAAFQAAAEgDAEQgDACgFAAQgEAAgEgDQgEgFgEAAQgEABgJAFQgIAGgMALIAAAdIAcAAQAIAAADAEQADADAAAEQAAAEgDADQgDADgIABg");
	this.shape_109.setTransform(934.3,30.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQARgOAUAAQALAAAMAEQAKAFAFAFQAHAIAGALQADAIAAAIIAAAJIhUAAQADAIAIAFQAJAFAMAAQAMAAATgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgFAEgPAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA9AAQgGgJgHgFQgIgEgKAAQgKAAgHAEg");
	this.shape_110.setTransform(921.3,31);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgWA4QgJgJAAgMIAAgsIgIAAQgHAAgEgDQgDgDAAgFQAAgFADgCQAEgDAHAAIAIAAIAAgTQAAgIADgDQACgDAGAAQAEAAADADQADADAAAIIAAATIAkAAQAJAAACADQADACABAFQgBAFgDADQgCADgJAAIgkAAIAAAoQAAAHACACQAFADAJAAQAQAAANgHQAGgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgRAAgLgIg");
	this.shape_111.setTransform(909.5,29.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgEABQgEAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAQAGAAAHABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_112.setTransform(896.2,31);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQARgOAUAAQALAAAMAEQAKAFAFAFQAHAIAGALQADAIAAAIIAAAJIhUAAQADAIAIAFQAJAFAMAAQAMAAATgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgFAEgPAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA9AAQgGgJgHgFQgIgEgKAAQgKAAgHAEg");
	this.shape_113.setTransform(883.5,31);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAhAwIAAhBQAAgEgCgDQgBgCgEAAQgEAAgDACQgDADgGAHIAAAoQAGAAAEAEQADADAAAEQAAAEgDADQgEADgHABIgSAAIAAhBQAAgEgBgDQgDgCgDAAQgEABgEACQgDADgFAGIAAAoQAGAAAEAEQADADAAAEQAAAEgDADQgEADgHABIgTAAQgHgBgDgDQgEgDAAgEQAAgEADgDQADgEAHAAIAAgwQgHgBgDgDQgDgDAAgEQAAgFAEgCQADgEAHAAIAUAAIAAAHQAFgFAEgDQAFgBAFAAQAEgBAFADQAEACADAFQAGgFAFgCQAFgDAHABQALAAAIAGQAJAIAAANIAAAtQAHAAACAEQAEADAAAEQAAAEgEADQgCADgIABg");
	this.shape_114.setTransform(871.1,30.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQARgOAUAAQALAAAMAEQAKAFAFAFQAHAIAGALQADAIAAAIIAAAJIhUAAQADAIAIAFQAJAFAMAAQAMAAATgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgFAEgPAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA9AAQgGgJgHgFQgIgEgKAAQgKAAgHAEg");
	this.shape_115.setTransform(858.3,31);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgEABQgEAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAQAGAAAHABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_116.setTransform(845.8,31);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQARgOAUAAQALAAALAEQALAFAFAFQAIAIAEALQAEAIAAAIIAAAJIhVAAQAEAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgEAEgQAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA8AAQgEgJgIgFQgIgEgKAAQgJAAgIAEg");
	this.shape_117.setTransform(801.3,31);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgEABQgEAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAQAGAAAHABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_118.setTransform(788.8,31);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgnAwQgIgBgDgDQgDgDAAgEQAAgEADgDQADgEAIAAIAMAAIAAgwIgHAAQgIgBgDgDQgDgDAAgEQAAgFADgCQADgEAIAAIAcAAIAAAOQAMgKAHgDQAIgDAHAAQAKAAAJAHQAHAGAAAFQAAAEgDAEQgDACgFAAQgEAAgEgDQgEgFgEAAQgEABgJAFQgIAGgMALIAAAdIAcAAQAIAAADAEQADADAAAEQAAAEgDADQgDADgIABg");
	this.shape_119.setTransform(776.5,30.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_120.setTransform(763.5,31.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgaArQgNgHgHgLQgHgMAAgMQAAgLAHgMQAHgMANgHQANgHANAAQAOAAANAHQANAHAHAMQAHAMAAALQAAAMgHALQgHAMgNAGQgNAHgOAAQgNAAgNgGgAgWgSQgKAJAAAKQAAAKAKAJQAJAIANAAQAOAAAJgIQAKgJAAgKQAAgIgHgJQgKgLgQAAQgNAAgJAJg");
	this.shape_121.setTransform(751,31);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgiAnQgSgOAAgXQAAgVAPgOQAPgPAWAAQAJAAAHACQAIABAGADQAEgDAEAAQAEAAADADQADADAAAIIAAANQAAAIgDADQgDADgEAAQgFAAgDgCQgCgCgBgGQgBgFgFgDQgIgFgNAAQgNAAgJAJQgJAIAAAMQAAAMAJAHQAIAHASAAQANAAAJgCQAFgCAEgEQAEgEAEAAQAEAAADADQADADAAAFQAAAHgJAGQgOAJgbAAQgXAAgOgKg");
	this.shape_122.setTransform(738.6,31);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgtA2QgPgOAAgUQAAgUAPgPQAPgPAWAAQAIAAAGADQAIACAIAFIAAgaIgEAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAZAAIAABuIAEAAQAHAAADADQAEADAAAFQAAAEgEADQgDADgHAAIgZAAIAAgFQgHAEgIACQgHADgHAAQgYAAgOgOgAgeAAQgJAHAAANQAAAMAIAHQAJAIAPAAQAMAAAJgIQAIgHAAgMQAAgNgJgHQgJgJgLAAQgOAAgJAJg");
	this.shape_123.setTransform(675.3,29.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgiBCQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAZAAIAAgxIgRAAQgHAAgEgDQgDgDAAgEQAAgFADgDQAEgDAHAAIAkAAIAABGIAZAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAgAgQgqIAAgXIAXAAIAAAXg");
	this.shape_124.setTransform(662.2,29);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ag4AKQgIAAgDgDQgDgDAAgEQAAgDADgDQADgDAIAAIBxAAQAIAAADADQADADAAADQAAAEgDADQgDADgIAAg");
	this.shape_125.setTransform(649.7,40.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_126.setTransform(636.9,31.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgWA4QgJgJAAgMIAAgsIgIAAQgIAAgCgDQgEgDAAgFQAAgFAEgCQACgDAIAAIAIAAIAAgTQAAgIADgDQADgDAEAAQAFAAADADQADADAAAIIAAATIAlAAQAIAAADADQACACAAAFQAAAFgCADQgDADgIAAIglAAIAAAoQAAAHADACQAEADAJAAQAQAAAOgHQAFgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgKgIg");
	this.shape_127.setTransform(625.1,29.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgEABQgEAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAQAGAAAHABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_128.setTransform(611.9,31);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgnAwQgIgBgDgDQgDgDAAgEQAAgEADgDQADgEAIAAIAMAAIAAgwIgHAAQgIgBgDgDQgDgDAAgEQAAgFADgCQADgEAIAAIAcAAIAAAOQAMgKAHgDQAIgDAHAAQAKAAAJAHQAHAGAAAFQAAAEgDAEQgDACgFAAQgEAAgEgDQgEgFgEAAQgEABgJAFQgIAGgMALIAAAdIAcAAQAIAAADAEQADADAAAEQAAAEgDADQgDADgIABg");
	this.shape_129.setTransform(354.3,30.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgtA2QgPgOAAgUQAAgUAPgPQAPgPAWAAQAIAAAGADQAIACAIAFIAAgaIgEAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAZAAIAABuIAEAAQAHAAADADQAEADAAAFQAAAEgEADQgDADgHAAIgZAAIAAgFQgHAEgIACQgHADgHAAQgYAAgOgOgAgeAAQgJAHAAANQAAAMAIAHQAJAIAPAAQAMAAAJgIQAIgHAAgMQAAgNgJgHQgJgJgLAAQgOAAgJAJg");
	this.shape_130.setTransform(341.9,29.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgtA2QgPgOAAgUQAAgUAPgPQAPgPAWAAQAIAAAGADQAIACAIAFIAAgaIgEAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAZAAIAABuIAEAAQAHAAADADQAEADAAAFQAAAEgEADQgDADgHAAIgZAAIAAgFQgHAEgIACQgHADgHAAQgYAAgOgOgAgeAAQgJAHAAANQAAAMAIAHQAJAIAPAAQAMAAAJgIQAIgHAAgMQAAgNgJgHQgJgJgLAAQgOAAgJAJg");
	this.shape_131.setTransform(329.3,29.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgsAoQgKgJAAgLQAAgNANgJQAOgLAYAAQAHAAANACIAAgFQAAgFgEgDQgEgDgKAAQgJAAgPAEIgJABQgEAAgDgDQgDgDAAgFIABgEIADgEIAIgCIAQgEIAOgBQASAAALAIQALAJAAAOIAAAqIADAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgYAAIAAgFQgIAEgJACQgIACgIAAQgRAAgLgJgAgbAMQgFAEAAAEQAAADACACQAGADAIAAQAIAAAIgDQAJgDAIgFIAAgJQgNgCgJAAQgMAAgKAGg");
	this.shape_132.setTransform(316.4,31);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("Ag4AKQgIAAgDgDQgDgDAAgEQAAgDADgDQADgDAIAAIBxAAQAIAAADADQADADAAADQAAAEgDADQgDADgIAAg");
	this.shape_133.setTransform(303.6,40.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_134.setTransform(290.9,31.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgWA4QgJgJAAgMIAAgsIgIAAQgIAAgCgDQgEgDAAgFQAAgFAEgCQACgDAIAAIAIAAIAAgTQAAgIADgDQADgDAEAAQAFAAADADQADADAAAIIAAATIAlAAQAIAAADADQACACAAAFQAAAFgCADQgDADgIAAIglAAIAAAoQAAAHADACQAEADAJAAQAQAAAOgHQAFgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgKgIg");
	this.shape_135.setTransform(279.1,29.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAQAGAAAHABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_136.setTransform(265.8,31);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgmAjQgPgOAAgVQAAgUAQgOQAQgOAVAAQAMAAALAEQAKAFAGAFQAHAIAEALQAEAIAAAIIAAAJIhUAAQADAIAIAFQAIAFANAAQALAAAUgFIALgCQAEAAADADQADADAAAEQAAAFgDACQgFAEgPAEQgQADgPAAQgXAAgPgOgAgRgXQgIAFgFAJIA9AAQgGgJgHgFQgIgEgKAAQgJAAgIAEg");
	this.shape_137.setTransform(233.9,31);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAhAwIAAhBQAAgEgCgDQgBgCgEAAQgDAAgEACQgEADgFAHIAAAoQAGAAAEAEQADADAAAEQAAAEgDADQgDADgIABIgSAAIAAhBQAAgEgBgDQgCgCgEAAQgEABgEACQgDADgFAGIAAAoQAGAAAEAEQADADAAAEQAAAEgDADQgEADgHABIgTAAQgIgBgDgDQgDgDAAgEQAAgEADgDQAEgEAGAAIAAgwQgGgBgEgDQgDgDAAgEQAAgFADgCQADgEAIAAIAUAAIAAAHQAFgFAEgDQAFgBAFAAQAEgBAFADQAEACADAFQAFgFAGgCQAGgDAFABQAMAAAHAGQAKAIAAANIAAAtQAGAAADAEQAEADAAAEQAAAEgEADQgDADgHABg");
	this.shape_138.setTransform(221.5,30.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgsAoQgKgJAAgLQAAgNANgJQAOgLAYAAQAHAAANACIAAgFQAAgFgEgDQgEgDgKAAQgJAAgPAEIgJABQgEAAgDgDQgDgDAAgFIABgEIADgEIAIgCIAQgEIAOgBQASAAALAIQALAJAAAOIAAAqIADAAQAIAAADADQADADAAAEQAAAFgDADQgDADgIAAIgYAAIAAgFQgIAEgJACQgIACgIAAQgRAAgLgJgAgbAMQgFAEAAAEQAAADACACQAGADAIAAQAIAAAIgDQAJgDAIgFIAAgJQgNgCgJAAQgMAAgKAGg");
	this.shape_139.setTransform(209,31);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAYAwQgHgBgDgDQgEgDAAgEQAAgEADgDQAEgEAGAAIAAglQAAgHgDgDQgFgFgKAAQgFAAgGAEQgFACgJAKIAAAkQAJABACABQAFADAAAGQAAAEgDADQgDADgIABIgYAAQgIgBgDgDQgDgDAAgEQAAgGAFgDQACgBAIgBIAAgwQgGgBgDgDQgEgDAAgEQAAgFAEgCQADgEAHAAIAUAAIAAAHQAGgEAHgDQAHgDAGABQATAAALALQAIAJAAAQIAAAkQAHAAADAEQADADAAAEQAAAEgDADQgDADgIABg");
	this.shape_140.setTransform(196.2,30.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("Ag4AKQgIAAgDgDQgDgDAAgEQAAgDADgDQADgDAIAAIBxAAQAIAAADADQADADAAADQAAAEgDADQgDADgIAAg");
	this.shape_141.setTransform(183.6,40.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_142.setTransform(170.9,31.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgVA4QgKgJAAgMIAAgsIgIAAQgHAAgDgDQgEgDAAgFQAAgFAEgCQADgDAHAAIAIAAIAAgTQAAgIADgDQADgDAFAAQAEAAADADQADADAAAIIAAATIAkAAQAJAAACADQAEACAAAFQAAAFgEADQgCADgJAAIgkAAIAAAoQAAAHACACQAFADAJAAQAQAAANgHQAGgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgSAAgJgIg");
	this.shape_143.setTransform(159.1,29.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAQAGAAAHABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_144.setTransform(145.8,31);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgtA2QgPgOAAgUQAAgUAPgPQAPgPAWAAQAIAAAGADQAIACAIAFIAAgaIgEAAQgHAAgDgDQgEgDAAgEQAAgFAEgDQADgDAHAAIAZAAIAABuIAEAAQAHAAADADQAEADAAAFQAAAEgEADQgDADgHAAIgZAAIAAgFQgHAEgIACQgHADgHAAQgYAAgOgOgAgeAAQgJAHAAANQAAAMAIAHQAJAIAPAAQAMAAAJgIQAIgHAAgMQAAgNgJgHQgJgJgLAAQgOAAgJAJg");
	this.shape_145.setTransform(101.9,29.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgiBCQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAZAAIAAgxIgRAAQgHAAgEgDQgDgDAAgEQAAgFADgDQAEgDAHAAIAkAAIAABGIAZAAQAIAAADADQADADAAAFQAAAEgDADQgDADgIAAgAgQgqIAAgXIAXAAIAAAXg");
	this.shape_146.setTransform(88.8,29);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("Ag4AKQgIAAgDgDQgDgDAAgEQAAgDADgDQADgDAIAAIBxAAQAIAAADADQADADAAADQAAAEgDADQgDADgIAAg");
	this.shape_147.setTransform(76.2,40.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgYArQgIgEgEgIQgEgFAAgJIAAgrIgDAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAYAAIAAA9QAAAGAEAEQADADAHAAQAFAAAGgDQAIgCAKgHIAAgpIgHAAQgIAAgDgDQgDgDAAgEQAAgFADgDQADgDAIAAIAcAAIAABGQAHAAADADQADADAAAFQAAAEgDADQgDADgIAAIgUAAIAAgFQgJAFgIACQgHACgGAAQgLAAgHgFg");
	this.shape_148.setTransform(63.5,31.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgWA4QgJgJAAgMIAAgsIgIAAQgIAAgDgDQgDgDAAgFQAAgFADgCQADgDAIAAIAIAAIAAgTQAAgIADgDQACgDAFAAQAFAAADADQADADAAAIIAAATIAlAAQAHAAADADQADACAAAFQAAAFgDADQgDADgHAAIglAAIAAAoQAAAHADACQAEADAJAAQAQAAAOgHQAFgCADAAQAEAAADADQADADAAAEQAAAEgDADQgFAFgPAEQgPAEgKAAQgRAAgLgIg");
	this.shape_149.setTransform(51.7,29.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgOAwIgPgFIgDACIgDABQgFAAgDgEQgDgDAAgHIAAgHQAAgIADgDQADgEAEAAQAEAAADADQACACACAFQAEAEAHACQAHACAHAAQAOAAAIgEQAEgDAAgCQAAgEgFgDQgGgDgPgBQgZgDgJgGQgIgHAAgLQAAgLAJgIQANgKAUAAQAGAAAHABIANAFIAEgDIADAAQAEAAADADQADADAAAIIAAAFQAAAHgCACQgDAFgGAAQgDAAgDgCQgDgDgBgEQgFgDgGgBQgFgCgGAAQgLAAgHAEQgDACAAACQAAACAEACQADACAMABQATADAIADQALAEAGAGQAFAHAAAIQAAAMgKAHQgOALgXAAQgHAAgHgBg");
	this.shape_150.setTransform(38.4,31);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AhCA8QgagYAAgkQgBgkAdgYQAcgYAkAAQAVAAASAIQASAHAKAKQAMAMAIAUQAGAOAAAPIAAAQIiSAAQAFAOAPAIQAOAIAXAAQAUAAAhgIQAOgEAFABQAIAAAEAEQAFAGABAIQAAAHgGAEQgHAHgcAGQgaAGgaAAQgpAAgagZgAgegoQgOAIgIAPIBpAAQgIgPgNgIQgOgHgSgBQgRABgNAHg");
	this.shape_151.setTransform(823.7,203.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgaBSQgNgCgLgGQgDADgDAAQgDACgDAAQgJAAgFgFQgFgHAAgMIAAgNQAAgNAFgFQAFgGAJABQAGgBAEAEQAFAEACAIQAJAIALADQAMADANAAQAZAAAOgHQAGgEAAgEQAAgHgJgFQgJgFgcgDQgrgEgPgLQgPgNAAgTQAAgTARgOQAWgRAjAAQAMAAALACQAMADAKAFIAHgEIAFgBQAHAAAFAFQAFAGAAANIAAAJQAAALgDAFQgFAIgKAAQgHAAgEgEQgFgEgCgHQgJgGgJgCQgKgCgKgBQgUABgMAGQgFADAAAEQAAADAHAEQAGADATADQAiAFAOAFQATAGAKALQAKANAAAOQAAAUgRANQgZATgnAAQgOAAgNgDg");
	this.shape_152.setTransform(802.4,203.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AhFBSQgNAAgFgFQgGgFAAgIQAAgIAGgFQAFgFANAAIAWAAIAAhWIgNAAQgNAAgGgFQgFgFAAgIQAAgIAFgFQAGgFANAAIAyAAIAAAWQAUgQAOgFQAMgGAMAAQARAAARANQALAJAAAJQABAIgGAFQgGAFgHABQgHAAgHgHQgHgGgHgBQgHAAgPAKQgPAJgUATIAAA1IAxAAQANAAAFAFQAGAFAAAIQAAAIgGAFQgFAFgNAAg");
	this.shape_153.setTransform(781.1,203.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgsBLQgMgHgIgOQgGgKAAgNIAAhNIgFAAQgOAAgFgEQgFgFAAgJQAAgHAFgFQAFgGAOAAIAqAAIAABqQAAALAGAGQAFAFAMAAQAKAAALgEQANgFASgLIAAhIIgNAAQgNAAgGgEQgFgFAAgJQAAgHAFgFQAGgGANAAIAxAAIAAB7QAMAAAFAEQAGAFgBAJQABAHgGAFQgFAGgNAAIgjAAIAAgJQgPAHgOAEQgNAEgMAAQgSAAgOgIg");
	this.shape_154.setTransform(758.8,203.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AguBKQgWgMgMgUQgMgTAAgVQAAgUAMgVQAMgVAWgMQAXgMAXAAQAYAAAXAMQAXANALAUQAMAVAAAUQAAAVgLATQgMAUgXAMQgXALgYAAQgXAAgXgLgAgoggQgQAPAAAUQAAAQARAPQAQAOAXAAQAYAAAQgOQARgPAAgRQAAgPgNgPQgRgUgbAAQgXAAgRAQg");
	this.shape_155.setTransform(737.3,203.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("Ag7BDQgggXAAgpQAAgkAagZQAagaAnAAQAPAAANADQANADALAFQAGgGAHAAQAIAAAFAGQAFAFAAANIAAAYQAAANgFAFQgFAGgIAAQgIAAgFgFQgEgDgCgJQgCgLgIgFQgOgIgWAAQgYAAgPAPQgPAPAAAVQAAAWAOAMQAPAMAgAAQAXAAAOgEQAIgEAIgHQAIgGAGAAQAHAAAGAFQAFAGAAAHQAAAMgQALQgZAQguAAQgoAAgYgSg");
	this.shape_156.setTransform(716.1,203.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgmBgQgRgPAAgVIAAhNIgNAAQgNAAgGgFQgFgFAAgIQAAgIAFgFQAGgFANAAIANAAIAAghQAAgNAFgFQAFgGAIAAQAIAAAFAGQAFAFAAANIAAAhIBBAAQANAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgNAAIhBAAIAABHQAAALAFAEQAHAFARAAQAcAAAYgLQAJgEAFgBQAHAAAFAGQAFAFAAAHQAAAHgFAGQgJAIgaAHQgZAHgSAAQgfAAgRgPg");
	this.shape_157.setTransform(256,200.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAqBSQgNAAgGgFQgFgFAAgIQAAgIAFgFQAGgFALAAIAAhCQAAgMgGgFQgJgIgQAAQgLABgJAEQgKAFgOAQIAABBQAOAAAEADQAJAFAAAKQAAAIgGAFQgFAFgNAAIgqAAQgNAAgFgFQgGgFAAgIQAAgKAJgFQAEgDAOAAIAAhWQgMAAgFgFQgGgFAAgIQAAgIAGgFQAGgFANAAIAiAAIAAAMQAKgIAMgEQAMgFAMAAQAgAAASAUQAPAQAAAaIAABBQAMAAAFAFQAGAFAAAIQAAAIgGAFQgFAFgOAAg");
	this.shape_158.setTransform(233.1,203.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AhDA8QgagYAAgkQABgkAcgYQAcgYAkAAQAUAAATAIQASAHAJAKQANAMAIAUQAGAOAAAPIAAAQIiSAAQAGAOAOAIQAOAIAWAAQAVAAAhgIQAOgEAFABQAHAAAGAEQAEAGAAAIQAAAHgFAEQgHAHgbAGQgbAGgaAAQgqAAgagZgAgfgoQgMAIgJAPIBpAAQgIgPgOgIQgNgHgSgBQgRABgOAHg");
	this.shape_159.setTransform(211.2,203.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AhPBdQgZgYAAgiQAAgjAagaQAagaAmAAQAOAAAMAFQANADANAJIAAgtIgGAAQgNABgFgGQgGgEAAgJQAAgIAGgEQAFgGANAAIArAAIAAC/IAGAAQANAAAFAFQAGAFAAAIQAAAIgGAFQgFAFgNAAIgrAAIAAgJQgMAHgNAEQgNAEgNAAQgpAAgZgYgAg0AAQgQANAAAWQAAAUAOANQAPAMAZAAQAYAAAOgMQAOgNAAgUQAAgWgPgNQgQgQgVAAQgWAAgQAQg");
	this.shape_160.setTransform(190.6,200.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgsBLQgMgHgIgOQgFgKgBgNIAAhNIgFAAQgOAAgFgEQgFgFAAgJQAAgHAFgFQAFgGAOAAIAqAAIAABqQAAALAGAGQAFAFAMAAQAKAAALgEQANgFASgLIAAhIIgNAAQgNAAgGgEQgFgFAAgJQAAgHAFgFQAGgGANAAIAxAAIAAB7QAMAAAFAEQAGAFgBAJQABAHgGAFQgFAGgNAAIgjAAIAAgJQgPAHgOAEQgNAEgMAAQgSAAgOgIg");
	this.shape_161.setTransform(168,203.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgmBgQgRgPAAgVIAAhNIgNAAQgNAAgGgFQgFgFAAgIQAAgIAFgFQAGgFANAAIANAAIAAghQAAgNAFgFQAFgGAIAAQAIAAAFAGQAFAFAAANIAAAhIBBAAQANAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgNAAIhBAAIAABHQAAALAFAEQAHAFARAAQAcAAAYgLQAJgEAFgBQAHAAAFAGQAFAFAAAHQAAAHgFAGQgJAIgaAHQgZAHgSAAQgfAAgRgPg");
	this.shape_162.setTransform(147.6,200.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgaBSQgNgCgLgGQgDADgDAAQgDACgDAAQgJAAgFgFQgFgHAAgMIAAgNQAAgNAFgFQAFgGAJABQAGgBAEAEQAFAEACAIQAJAIALADQAMADANAAQAZAAAOgHQAGgEAAgEQAAgHgJgFQgJgFgcgDQgrgEgPgLQgPgNAAgTQAAgTARgOQAWgRAjAAQAMAAALACQAMADAKAFIAHgEIAFgBQAHAAAFAFQAFAGAAANIAAAJQAAALgDAFQgFAIgKAAQgHAAgEgEQgFgEgCgHQgJgGgJgCQgKgCgKgBQgUABgMAGQgFADAAAEQAAADAHAEQAGADATADQAiAFAOAFQATAGAKALQAKANAAAOQAAAUgRANQgZATgnAAQgOAAgNgDg");
	this.shape_163.setTransform(124.8,203.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]}).wait(135));

	// Background
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(2,1,1).p("EBJcgGOIAAGOIAAGQIywAAIywAAIywAAIAAmQIAAmOIAAmRISwAAIAAGRIAAGOIAAGQEA2sgMfISwAAIAAGRIywAAIAAGOIAAGQEA2sgMfIAAGRIywAAIywAAEBJcAAAIywAAIywAAIywAAEAj8gMfISwAAAxLmOIAAGOIAAGQIAAGQIywAAIyvAAIyxAAIAAmQIAAmQIAAmOIAAmRISxAAIAAGRIAAGOIAAGQIAAGQEgj7gMfISwAAIAAGRIywAAIAAGOIAAGQIAAGQEgj7gMfIAAGRIyvAAIyxAAEg2qAGQIyxAAEg2qAAAIyxAAEgj7AGQIyvAAEgj7AAAIyvAAEg2qgMfISvAAAxLGQIywAAAxLAAIywAA");
	this.shape_164.setTransform(480,90);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFCCCC").s().p("EA2rADIIyvAAIAAmPIAAGPIywAAIAAmPISwAAISvAAIAAGPIAAmPISxAAIAAGPgEgj6ADIIAAmPISvAAIAAGPgEgj6ADIIywAAIAAmPISwAAIAAGPgEg2qADIIyxAAIAAmPISxAAIAAGPg");
	this.shape_165.setTransform(480,30);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#DDDDDD").s().p("Egj6AJXIAAmQISvAAIAAGQgEg2qAJXIAAmQISwAAIAAGQgEg2qAJXIyxAAIAAmQISxAAIAAGQgEgj6ADHgEA2rgDGIAAmQIAAGQIyvAAIAAmQIAAGQIywAAIAAmQISwAAISvAAISxAAIAAGQgEgj6gDGIAAmQISvAAIAAGQgEgj6gDGIywAAIAAmQISwAAIAAGQgEg2qgDGIyxAAIAAmQISxAAIAAGQg");
	this.shape_166.setTransform(480,110);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFCC").s().p("EA2rADHIAAmNISxAAIAAGNgEA2rADHIyvAAIAAmNISvAAIAAGNgEAj8ADHIywAAIAAmNISwAAIAAGNgEgj6ADHIAAmNISvAAIAAGNgEg2qADHIAAmNISwAAIAAGNgEhJbADHIAAmNISxAAIAAGNgEg2qgDGg");
	this.shape_167.setTransform(480,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164}]}).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(489,310,942,217);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;