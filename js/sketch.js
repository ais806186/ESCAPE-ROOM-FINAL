var picture1;
var myhtmlcanvas;

function preload() {
  picture1 = loadImage('https://dl.dropboxusercontent.com/s/va8ewjz4wbfj6r4/sunflower.jpeg');

}


function setup()
{
  myhtmlcanvas = createCanvas(800,600);
  myhtmlcanvas.parent('canvasHolder');

}

function draw()
{
  image(picture1,0,0);
}