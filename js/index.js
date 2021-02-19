let game;
let carImage, trackImage;

window.onload = () => {
  document.addEventListener('keydown', e => {
    switch (e.key) {
      case "ArrowLeft":
        game.moveCar(DIRECTION.left);
        break;
      case "ArrowRight":
        game.moveCar(DIRECTION.right);
        break;
      default:
        console.log("Unhandled keypress");
    }
  });
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};

function startGame() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext('2d');
  game = new Game(canvas.width, canvas.height);
  loadTrack(canvas, ctx);
  loadCar(ctx);
  setInterval(() => update(canvas, ctx), 1);
}

function update(canvas, ctx) {
  ctx.drawImage(trackImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImage, game.car.xPosition, game.car.yPosition, game.car.width, game.car.height);
}

function loadCar(ctx) {
  carImage = new Image();
  carImage.addEventListener('load', () => {
    ctx.drawImage(carImage, game.car.xPosition, game.car.yPosition, game.car.width, game.car.height);
  });
  carImage.src = '../images/car.png';
}

function loadTrack(canvas, ctx) {
  trackImage = new Image();
  trackImage.addEventListener('load', () => {
    ctx.drawImage(trackImage, 0, 0, canvas.width, canvas.height);
  });
  trackImage.src = '../images/road.png';
}