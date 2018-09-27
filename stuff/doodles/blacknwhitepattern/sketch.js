var speed = 4;

var x_axis = false;
var y_axis = false;

var display_w = 1000;
var display_h = 500;

var ball_current_x = Math.floor(Math.random() * display_w) + 0;
var ball_current_y = Math.floor(Math.random() * display_h) + 0;

var c = 0;

function setup() {
  createCanvas(display_w, display_h);
  background(50);
  frameRate(120);
}

function draw() {
  
  //Clear field
  //resetField();
  
  //Wall Bounce
  if (ball_current_y >= display_h-10 || ball_current_y <= 0) {
    y_axis = !y_axis;
    if (c == 0) {
      c = 255;
    } else {
      c = 0;
    }
  }
  
  if (ball_current_x >= display_w-10 || ball_current_x <= 0) {
    x_axis = !x_axis;
    if (c == 0) {
      c = 255;
    } else {
      c = 0;
    }
  }

  if (x_axis) {
    ball_current_x += speed;
  } else {
    ball_current_x -= speed;
  }
  if (y_axis) {
    ball_current_y += speed;
  } else {
      ball_current_y -= speed;
  }

  //Ball
  fill(c);
  rect(ball_current_x, ball_current_y, 10, 10);
    
}

var dummyboo = false;

function keyPressed() {
  if (!dummyboo) {
    noLoop();
  } else {
    loop();
  }
  dummyboo = !dummyboo;
}

function resetField() {
  background(50);
}
