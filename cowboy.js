var width = 320,
// canvas width
height = 500,
// canvas height
gLoop,
c = document.getElementById('c')

ctx = c.getContext('2d');
c.width = width;
c.height = height;

var clear = function(){
  ctx.fillStyle = '#ffff99';
  //chose color for filling
  ctx.beginPath();
  // start drawing
  ctx.rect(0,0,width, height)
  // draw rectangle form point 0,0, to width,height
  ctx.closePath();
  // stop drawing
  ctx.fill();
  //fill canvas with chosen color
};

var howManyCircles = 15, circles = []

for (var i = 0; i < howManyCircles; i++)
  circles.push([Math.random() * width, Math.random()*height, Math.random() * 100, Math.random() / 2]);
  // add info about circles into array - position, radius and transparency

  var DrawCircles = function(){
    for (var i = 0; i < howManyCircles; i++) {
      ctx.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')';
      ctx.beginPath();
      ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);
      //arc(x, y, radius, startAngle, endAngle, anticlockwise)
      //circle has always PI*2 end angle
      ctx.closePath();
      ctx.fill();
    }
  };

  var MoveCircles = function(deltaY){
  for (var i = 0; i < howManyCircles; i++) {
    if (circles[i][1] - circles[i][2] > height) {
    //the circle is under the screen so we can chage its values
      circles[i][0] = Math.random() * width;
      circles[i][2] = Math.random() * 100;
      circles[i][1] = 0 - circles[i][2];
      circles[i][3] = Math.random() / 2;
    } else {
    //move circle deltaY pixels down
      circles[i][1] += deltaY;
    }
  }
};

var GameLoop = function(){
  clear();
  MoveCircles(5);
  DrawCircles();
  gLoop = setTimeout(GameLoop, 1000 / 50);
}
GameLoop();