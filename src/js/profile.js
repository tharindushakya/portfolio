var layer1;
var layer2;
var layer3;

var ctx1;
var ctx2;
var ctx3;

let colorIndex = 0;
let delay = 6000;
let y = 710;
let direction = 1;

function profile() {
  layer1 = document.getElementById("layer1");
  ctx1 = layer1.getContext("2d");
  layer2 = document.getElementById("layer2");
  ctx2 = layer2.getContext("2d");
  layer3 = document.getElementById("layer3");
  ctx3 = layer3.getContext("2d");

  setInterval(drawAll);
}
function drawAll() {
  draw1();
  draw2();
  draw3();
}
function draw1() {
  if (layer1.getContext) {
    ctx1.beginPath();
    ctx1.moveTo(30, 250);
    ctx1.quadraticCurveTo(-20, 220, 30, 190);
    ctx1.lineTo(310, 10);
    ctx1.quadraticCurveTo(340, 0, 370, 10);
    ctx1.lineTo(650, 190);
    ctx1.quadraticCurveTo(700, 220, 650, 250);
    ctx1.lineTo(28, 655);
    ctx1.quadraticCurveTo(-20, 680, 30, 710);
    ctx1.lineTo(310, 890);
    ctx1.quadraticCurveTo(340, 900, 370, 890);
    ctx1.lineTo(650, 710);
    ctx1.quadraticCurveTo(700, 680, 654, 655);
    ctx1.closePath();
    let percent = y / 710;
    ctx1.strokeStyle = `rgb(${percent * 153}, ${percent * 238}, ${
      percent * 255
    })`;
    ctx1.stroke();

    y += direction;

    if (y <= 250) {
      direction = 1;
      colorIndex++;
    } else if (y >= 710) {
      direction = -1;
    }
    setTimeout(function () {
      requestAnimationFrame(draw1);
    }, delay);
  } else {
    // canvas-unsupported code here
  }
}
function draw2() {
  if (layer2.getContext) {
    ctx2.setLineDash([4, 4]);

    ctx2.beginPath();
    ctx2.moveTo(28, 280);
    ctx2.quadraticCurveTo(25, 250, 60, 225);
    ctx2.lineTo(308, 60);
    ctx2.quadraticCurveTo(340, 40, 372, 60);
    ctx2.lineTo(620, 225);
    ctx2.quadraticCurveTo(655, 250, 652, 280);
    ctx2.lineTo(652, 620);
    ctx2.quadraticCurveTo(654, 655, 620, 675);
    ctx2.lineTo(372, 840);
    ctx2.quadraticCurveTo(340, 860, 308, 840);
    ctx2.lineTo(60, 675);
    ctx2.quadraticCurveTo(28, 655, 28, 620);
    ctx2.closePath();
    
    ctx2.stroke();

  } else {
    // canvas-unsupported code here
  }
}
function draw3() {
  if (layer3.getContext) {
    // Draw Shape
    ctx3.moveTo(652, 620);
    ctx3.quadraticCurveTo(654, 655, 620, 675);
    ctx3.lineTo(372, 840);
    ctx3.quadraticCurveTo(340, 860, 308, 840);
    ctx3.lineTo(60, 675);
    ctx3.quadraticCurveTo(28, 655, 28, 620);
    ctx3.closePath();
    ctx3.stroke();
  }
}
