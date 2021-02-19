const DIRECTION = {left: false, right: true};

class Car {
    constructor(xPos, yPos, width, height) {
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.width = width;
        this.height = height;
    }

    move(towards) {
        (towards === DIRECTION.left) ? this.xPosition -= 5 : this.xPosition += 5;
        // console.log(`leftEdge: ${this.leftEdge()}, rightEdge: ${this.rightEdge()}`);
    }

    leftEdge() {
        return this.xPosition;
    }

    rightEdge() {
        return this.xPosition + this.width;
    }
};
