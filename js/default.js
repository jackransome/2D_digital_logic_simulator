//setting up the canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//loading in all the images
window.addEventListener("keydown", onKeyDown, true);
window.addEventListener("keyup", onKeyUp, true);
window.addEventListener("mousedown", mouseDown, true);
window.addEventListener("mouseup", mouseUp, true);

    c.width = window.innerWidth-100;
    c.height = window.innerHeight-100;
    var cwidth = c.width;
    var cheight = c.height;
	var mouse = {
		x: 0,
		y: 0
	}
window.onmousemove = function (e) {
    var bbox = c.getBoundingClientRect();

    mouse.x = e.clientX - bbox.left * (c.width / bbox.width) + canvasTranslate.x-10;
    mouse.y = e.clientY - bbox.top * (c.height / bbox.height) + canvasTranslate.y-10;
}
//----------VARIABLES----------//
canvasTranslate = {
	x: 0,
	y: 0
}
mouse = {
	x: 0,
	y: 0
}
keys = {
	escape: false,
	mouseLeft: false,
	space: false,
	shift: false,
	w: false,
	a: false,
	d: false,
	s: false,
	q: false,
	r: false,
	up: false,
	down: false,
	z: false,
	f: false,
	b: false,
	t: false
}
//----------------------------//
function cell(_type)
{
	this.type = _type;
	this.state = 0;
	this.direction = "none"
	this.wireType = 0;
}

//---------/VARIABLES----------//
Grid = new grid(100, 100, 4)
Grid.fill();
setInterval(loop, 100);
var bLatch = false;
function loop()
{
	Grid.update();
	if (keys.shift)
	{
		if (keys.w && Grid.cellSelected.y > 0)
		{
			Grid.cellSelected.y-=2;
		}
		if (keys.a && Grid.cellSelected.x > 0)
		{
			Grid.cellSelected.x-=2;
		}
		if (keys.s && Grid.cellSelected.y < Grid.height-1)
		{
			Grid.cellSelected.y+=2;
		}
		if (keys.d && Grid.cellSelected.x < Grid.width-1)
		{
			Grid.cellSelected.x+=2;
			
		}
		if (keys.z)
		{
			Grid.addViaReceiver("down");
		}
		if (keys.q)
		{
			Grid.addViaReceiver("up");
		}		
	}
	else
	{
		if (keys.w && Grid.cellSelected.y > 0)
		{
			Grid.cellSelected.y--;
		}
		if (keys.a && Grid.cellSelected.x > 0)
		{
			Grid.cellSelected.x--;
		}
		if (keys.s && Grid.cellSelected.y < Grid.height-1)
		{
			Grid.cellSelected.y++;
		}
		if (keys.d && Grid.cellSelected.x < Grid.width-1)
		{
			Grid.cellSelected.x++;
		}
		if (keys.up && Grid.cellSelected.z > 0)
		{
			Grid.cellSelected.z--;
		}	
		if (keys.down && Grid.cellSelected.z < Grid.array[0][0].length - 1)
		{
			Grid.cellSelected.z++;
		}
		if (keys.z)
		{
			Grid.addVia("down");
		}
		if (keys.q)
		{
			Grid.addVia("up");
		}		
	}
	if (keys.escape)
	{
		Grid.deleteCell();
	}
	if (keys.space)
	{
		Grid.addWire(1);
	}
	//if (keys.b)
	//{
		//Grid.addWire(2);
	//}
	if (keys.r)
	{
		Grid.addInverter();
	}
	if (keys.f)
	{
		Grid.addSource();
	}
	if (keys.c)
	{
		Grid.addAnd();
	}
	if (keys.v)
	{
		Grid.addOr();
	}
	if (keys.t)
	{
		Grid.addRepeater();
	}
	if (keys.mouseLeft)
	{
		Grid.addWireMouse();
	}
	ctx.fillStyle = "black"
	ctx.fillRect(0, 0, 10000, 10000);
	if (keys.b){
		if (!bLatch){
			Grid.update();
		}
		bLatch = true;
	}
	else{
		bLatch = false;
	}
	
	
	Grid.draw();
}