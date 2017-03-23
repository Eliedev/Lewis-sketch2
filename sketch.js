function setup() {
  resizeCanvas(500, 500);
  frameRate(8);
  //noLoop();
}
// surface 1 long
var grid = new Grid(10);
grid.borders[0] = true;
grid.borders[1] = true;
grid.borders[2] = true;
grid.borders[3] = true;
grid.dimensions.w = 200;
grid.dimensions.h = 100;
grid.origin.x = 300;
grid.origin.y = 440;
grid.lineWeight = 2;
grid.angle = 180;
grid.offset = 9;

// surface 1 short
var grid2 = new Grid(10);
grid2.borders[0] = true; // Left Border
grid2.borders[1] = true; // Top Border
grid2.borders[2] = true; // Right Border
grid2.borders[3] = true; // Bottom Border
grid2.dimensions.w = 100;
grid2.dimensions.h = 90;
grid2.origin.x = 200;
grid2.origin.y = 340;
grid2.lineWeight = 2;
grid2.angle = 180;
grid2.offset = 16;

// surface 3 short
var grid3 = new Grid(4);
grid3.borders[0] = true; // Left Border
grid3.borders[1] = true; // Top Border
grid3.borders[2] = true; // Right Border
grid3.borders[3] = true; // Bottom Border
grid3.dimensions.w = 100;
grid3.dimensions.h = 30;
grid3.origin.x = 330;
grid3.origin.y = 310;
grid3.lineWeight = 2;
grid3.angle = 90;
grid3.shearX = 45;
grid3.shearY = 0;
grid3.offset = 5;


// surface 3 long
var grid4 = new Grid(6);
grid4.borders[0] = true; // Left Border
grid4.borders[1] = true; // Top Border
grid4.borders[2] = true; // Right Border
grid4.borders[3] = true; // Bottom Border
grid4.dimensions.w = 190;
grid4.dimensions.h = 50;
grid4.origin.x = 380;
grid4.origin.y = 170;
grid4.lineWeight = 2;
grid4.angle = 90;
grid4.shearX = 45;
grid4.shearY = 0;


//surface 2 long
var grid5 = new Grid(8);
grid5.borders[0] = true; // Left Border
grid5.borders[1] = true; // Top Border
grid5.borders[2] = true; // Right Border
grid5.borders[3] = true; // Bottom Border
grid5.dimensions.w = 113;
grid5.dimensions.h = 71;
grid5.origin.x = 281;
grid5.origin.y = 170;
grid5.lineWeight = 2;
grid5.angle = 135;
grid5.shearX = 45;
grid5.shearY = 0;
grid5.offset = 16;


// surface 2 short
var grid6 = new Grid(8);
grid6.borders[0] = true; // Left Border
grid6.borders[1] = true; // Top Border
grid6.borders[2] = true; // Right Border
grid6.borders[3] = true; // Bottom Border
grid6.dimensions.w = 70;
grid6.dimensions.h = 70;
grid6.origin.x = 380;
grid6.origin.y = 170;
grid6.lineWeight = 2;
grid6.angle = 135;
grid6.shearX = 45;
grid6.shearY = 0;
grid6.offset = 9;

// surface 4
var grid7 = new Grid(10);
grid7.borders[0] = true; // Left Border
grid7.borders[1] = true; // Top Border
grid7.borders[2] = true; // Right Border
grid7.borders[3] = true; // Bottom Border
grid7.dimensions.w = 100;
grid7.dimensions.h = 90;
grid7.origin.x = 330;
grid7.origin.y = 310;
grid7.lineWeight = 2;
grid7.angle = 180;
grid7.offset = 16;


// surface 5
var grid8 = new Grid(6);
grid8.borders[0] = true; // Left Border
grid8.borders[1] = true; // Top Border
grid8.borders[2] = true; // Right Border
grid8.borders[3] = true; // Bottom Border
grid8.dimensions.w = 90;
grid8.dimensions.h = 30;
grid8.origin.x = 230;
grid8.origin.y = 220;
grid8.lineWeight = 2;
grid8.angle = 90;
grid8.shearX = 45;
grid8.shearY = 0;
grid8.offset = 24;


// surface 6
var grid9 = new Grid(8);
grid9.borders[0] = true; // Left Border
grid9.borders[1] = true; // Top Border
grid9.borders[2] = true; // Right Border
grid9.borders[3] = true; // Bottom Border
grid9.dimensions.w = 42;
grid9.dimensions.h = 70;
grid9.origin.x = 329;
grid9.origin.y = 310;
grid9.lineWeight = 2;
grid9.angle = 135;
grid9.shearX = 45;
grid9.shearY = 0;
grid9.offset = 24;
grid9.color = [55, 34, 45]

function draw() {
  background(255);
  grid.draw();
  grid2.draw();
  grid3.draw();
  grid4.draw();
  grid5.draw();
  grid6.draw();
  grid7.draw();
  grid8.draw();
  grid9.draw();
}




function Grid(rows) {
  this.dimensions = {w: 0, h: 0};
  this.origin = {x: 0, y:0};
  this.rows = rows;
  this.angle = 0;
  this.lineWeight = 1;
  this.shearX;
  this.shearY;
  this.offset = 0;
  
  // Left, Top, Right, Bottom
  this.borders = [
    false,
    false,
    false,
    false
  ]
  
  this.draw = function() {
    push();
    translate(this.origin.x, this.origin.y);
    rotate(radians(this.angle));
    shearX(radians(this.shearX));
    shearY(radians(this.shearY));
    strokeWeight(this.lineWeight);
    fill(random(0, 255), random(0, 255), random(0, 255));
    
    for(var i = 0; i <= this.rows; i++) {
      if(i < frameCount - this.offset) {
        line(0, (i / this.rows) * this.dimensions.h, this.dimensions.w, (i / this.rows) * this.dimensions.h);
      }
    }
    
    // Left border
    if(this.borders[0]) {
      line(0, 0, 0, this.dimensions.h);
    }
    
    // Top border
    if(this.borders[1]) {
      line(0, 0, this.dimensions.w, 0);
    }
    
    // Right border
    if(this.borders[2]) {
      line(this.dimensions.w, 0, this.dimensions.w, this.dimensions.h);
    }
    
    // Bottom border
    if(this.borders[3]) {
      line(0, this.dimensions.h, this.dimensions.w, this.dimensions.h);
    }
    
    pop();
  }
}