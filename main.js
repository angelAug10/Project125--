noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;
background(51);
background('rgb(0,255,0)');
background('rgb(0,255,0)');
textSize(12);
text('Font Size 12', 10, 30);
textSize(14);
text('Font Size 14', 10, 60);
textSize(16);
text('Font Size 16', 10, 90);


function draw()
{
background('#969A97');
fill('#F90093');
stroke('#F90093');
square(noseX,noseY,diffrence);
}
function setup(){
 background(200);
text('Font Manipulator', 50, 50);
background('skyblue');
  textSize(100);
  text('🌈', 0, 100);
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('hi', 50, 50);
}
  

function modelLoaded(){
console.log('PoseNet Is Intialized!');
}
function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
diffrence=floor(leftWristX-rightWristX);
}
}
