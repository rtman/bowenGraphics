console.log('hello', Date.now());

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth + 300;
canvas.height = window.innerHeight + 300;

console.log(canvas.width);
document.body.appendChild(canvas);

const sin = a => Math.sin(a);
const cos = a => Math.cos(a);
const tan = a => Math.tan(a);

var startTime = Date.now();
let t;
const frame = 0;
const TAU = Math.PI * 2;

const colors = ['green', 'red', 'blue'];
const pixelSize = {height: 50, width: 100};
const fillSize = {height: 5, width: 150};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const makeColorGradient = (
  frequency1,
  frequency2,
  frequency3,
  phase1,
  phase2,
  phase3,
  center,
  width,
  len,
) => {
  if (center == undefined) center = 128;
  if (width == undefined) width = 127;
  if (len == undefined) len = 50;

  const red = Math.sin(frequency1 * phase1) * width + center;
  const green = Math.sin(frequency2 * phase2) * width + center;
  const blue = Math.sin(frequency3 * phase3) * width + center;
  const rgba = `rgb(${red}, ${green}, ${blue})`;
  return rgba;
};

const rainbow = (angle, offset, alpha) => {
  const r = 127 + 127 * sin(angle + TAU * 0 * offset);
  const g = 127 + 127 * sin(angle + ((TAU * 1) / 3) * offset);
  const b = 127 + 127 * sin(angle + ((TAU * 2) / 3) * offset);
  // let a = sin(alpha + t);
  // if (a < 0) {
  //   a *= -1;
  // }
  // console.log(a);
  return `rgba(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)}, ${alpha})`;
};

function animloop() {
  requestAnimationFrame(animloop);
  t = (Date.now() - startTime) / 1000;
  // ctx.fillStyle = 'hsla(0,0%,0%,0.001)';
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(canvas, 2, -1);

  for (let x = 0; x < canvas.width; x += pixelSize.width) {
    for (let y = 0; y < canvas.height; y += pixelSize.height) {
      // const colorIndex = getRandomInt(3);
      // ctx.fillStyle = colors[colorIndex]
      ctx.save();

      ctx.translate(x, y);
      // ctx.rotate(1 * cos(0.1 * t));
      // ctx.rotate(((canvas.width / cos(x - t)) * y) / 100);
      // ctx.fillStyle = `hsla(${x + sin(y - t) * 200},100%,50%,1)`;
      // ctx.fillStyle = makeColorGradient(
      //   10 * x + 1,
      //   10 * x + 2,
      //   10 * x + 3,
      //   10,
      //   10,
      //   10,
      // );
      ctx.fillStyle = rainbow(1 * sin(t + x), 2, 1);
      ctx.fillRect(x, y + sin(x + t) * 100, fillSize.width, fillSize.height);
      ctx.restore();
    }
  }
}

animloop();
