class Game {
    constructor(trackWidth, trackHeight) {
        this.car = new Car(230, 600, 40, 80);
        this.width = trackWidth;
        this.obstacles = [];

    }

    moveCar(towards) {
        if((towards === DIRECTION.left && this.car.leftEdge() >= 5) || (towards === DIRECTION.right && this.car.rightEdge() <= this.width - 5)) this.car.move(towards);
    }

    addObstacle() {

    }

    moveObstacles() {

    }

    carIntersects(obstacle) {
        return false;
    }
}