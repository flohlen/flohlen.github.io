var speed_x = 4;
var speed_y = Math.floor(Math.random() * 5) + 2;

var score_1 = 0;
var score_2 = 0;

var x_axis = false;
var y_axis = false;

var display_w = 1000;
var display_h = 500;

var ball_current_x = display_w/2 - 5;
var ball_current_y = display_h/2 - 5;

function setup() {
  createCanvas(display_w, display_h);
  background(50);
  
  fill(255);
  line(display_w/2,0,display_w/2,display_h);
  
  frameRate(120);
}

function draw() {
  
  //Clear field
  resetField();
  
  //Paddle 1
  fill(255,0,0);
  rect(20, mouseY-50, 10, 100);
  
  //Paddle 2
  //Computer
  fill(0,0,255);
  rect(display_w-30, ball_current_y-50, 10, 100);
  
  //Paddle 1
  if (ball_current_y <= mouseY+50 && ball_current_y >= mouseY-50 && ball_current_x <= 30 && ball_current_x >= 20) {
    x_axis = !x_axis;
    speed_y = Math.floor(Math.random() * 5) + 2;
  }
  
  //Paddle2
  //Computer
  if (ball_current_y <= ball_current_y+50 && ball_current_y >= ball_current_y-50 && ball_current_x >= display_w-40 && ball_current_x <= display_w-30) {
    x_axis = !x_axis;
    speed_y = Math.floor(Math.random() * 5) + 2;
  }
  
  //Out
  if (ball_current_x >= display_w-10 || ball_current_x <= 0) {
    if (ball_current_x >= display_w-10) {
      score_1++;
    } else {
      score_2++;
    }
    ball_current_x = display_w/2 - 5;
    ball_current_y = display_h/2 - 5;
    x_axis = !x_axis;
    y_axis = !y_axis;
  }
  
  //Wall Bounce
  if (ball_current_y >= display_h-10 || ball_current_y <= 0) {
    y_axis = !y_axis;
  }

  if (x_axis) {
    ball_current_x += speed_x;
  } else {
    ball_current_x -= speed_x;
  }
  if (y_axis) {
    ball_current_y += speed_y;
  } else {
      ball_current_y -= speed_y;
  }

  //Ball
  fill(255,255,255);
  var ball = rect(ball_current_x, ball_current_y, 10, 10);
  
  //Score display
  noStroke();
  fill(255);
  textSize(100);
  text("" + score_1 +"", display_w/2 - 100, display_h/2);
  
  noStroke();
  fill(255);
  textSize(100);
  text("" + score_2 +"", display_w/2 + 50, display_h/2);
  
  noStroke();
  fill(255);
  textSize(100);
  text(":", display_w/2 - 11, display_h/2);
  
  
  
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
  
  fill(255);
  line(display_w/2,0,display_w/2,display_h);
}