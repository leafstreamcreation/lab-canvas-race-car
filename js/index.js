let game;
let carImage, trackImage;

window.onload = () => {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        game.moveCar(DIRECTION.LEFT);
        break;
      case "ArrowRight":
        game.moveCar(DIRECTION.RIGHT);
        break;
      default:
        console.log("Unhandled keypress");
    }
  });
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function startGame() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  game = new Game(canvas.width, canvas.height);
  loadTrack(canvas, ctx);
  loadCar(ctx);
  setInterval(() => update(canvas, ctx), 1);
  setInterval(() => game.addObstacle(), 2000);
  setInterval(() => game.moveObstacles(), 10);
}

function update(canvas, ctx) {
  ctx.drawImage(trackImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    carImage,
    game.car.xPosition,
    game.car.yPosition,
    game.car.width,
    game.car.height
  );
  ctx.fillStyle = "red";
  game.obstacles.forEach((obstacle) => {
    ctx.fillRect(
      obstacle.xPosition,
      obstacle.yPosition,
      obstacle.width,
      obstacle.height
    );
  });
}

function loadCar(ctx) {
  carImage = new Image();
  carImage.addEventListener("load", () => {
    ctx.drawImage(
      carImage,
      game.car.xPosition,
      game.car.yPosition,
      game.car.width,
      game.car.height
    );
  });
  carImage.src = "../images/car.png";
}

function loadTrack(canvas, ctx) {
  trackImage = new Image();
  trackImage.addEventListener("load", () => {
    ctx.drawImage(trackImage, 0, 0, canvas.width, canvas.height);
  });
  trackImage.src = "../images/road.png";
}
