var count_red = Math.floor(Math.random() * 255) + 1;
var countup_red = true;

var count_green = Math.floor(Math.random() * 255) + 1;
var countup_green = true;

var count_blue = Math.floor(Math.random() * 255) + 1;
var countup_blue = true;


function setup() {
  createCanvas(1640, 1480);
  background(50);
}

function draw() {

  //Red Counter
  if (countup_red)
  {
    count_red += (Math.floor(Math.random() * 5) + 1);
    if (count_red >= 255)
      countup_red = false;
  }
  else
  {
    count_red -= (Math.floor(Math.random() * 5) + 1);
    if (count_red <= 100)
      countup_red = true;
  }
  
  //Green Counter
  if (countup_green)
  {
    count_green += (Math.floor(Math.random() * 5) + 1);
    if (count_green >= 255)
      countup_green = false;
  }
  else
  {
    count_green -= (Math.floor(Math.random() * 5) + 1);
    if (count_green <= 100)
      countup_green = true;
  }
  
  //Blue Counter
  if (countup_blue)
  {
    count_blue += (Math.floor(Math.random() * 5) + 1);
    if (count_blue >= 255)
      countup_blue = false;
  }
  else
  {
    count_blue -= (Math.floor(Math.random() * 5) + 1);
    if (count_blue <= 100)
      countup_blue = true;
  }

  if (mouseIsPressed) {
    background(50);
  } else {
    fill(count_red, count_green, count_blue);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
