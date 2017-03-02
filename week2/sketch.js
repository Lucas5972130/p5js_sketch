function Ball(x,y) {
  this.position = {x:x,y:y};
this.speed = {x:random(-2,2),y:random(-2,2)},

fill(random(225,0),0,225);

 this.draw = function(){
   this.position.x= this.position.x +this.speed.x + random(0,2);
   this.position.y= this.position.y+ this.speed.y +random(0,2);
  ellipse(this.position.x,this.position.y,1,1);
 
 }
}
var balls = [];

function mouseDragged(){
  var ball = new Ball(mouseX,mouseY);
balls.push(ball);
}


function draw() {
  for(var i=0;i<balls.length;i++)
balls[i].draw();
}


function setup() {
  resizeCanvas(500,500)
}
