class Game {
  static carSpeed = 5;
  static obstacleSpeed = 1;

  constructor(trackWidth, trackHeight) {
    this.car = new Car(230, 600, 40, 80);
    this.width = trackWidth;
    this.height = trackHeight;
    this.obstacles = [];
  }

  moveCar(towards) {
    if (
      (towards === DIRECTION.LEFT && this.car.leftEdge() >= 5) ||
      (towards === DIRECTION.RIGHT && this.car.rightEdge() <= this.width - 5)
    )
      this.car.move(towards, Game.carSpeed);
  }

  addObstacle() {
    this.obstacles.push(new Obstacle(100, 460, 50, 100));
  }

  moveObstacles() {
    this.obstacles.forEach((obstacle) => {
      obstacle.move(Game.obstacleSpeed);
    });
    if (this.obstacles.length > 0 && this.obstacles[0].yPosition > this.height)
      this.obstacles.shift();
  }
}
