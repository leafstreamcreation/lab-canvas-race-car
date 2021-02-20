class Car extends BoundingBox {
  constructor(xPos, yPos, width, height) {
    super(xPos, yPos, width, height);
  }

  move(towards, interval) {
    towards === DIRECTION.LEFT
      ? (this.xPosition -= interval)
      : (this.xPosition += interval);
    // console.log(`leftEdge: ${this.leftEdge()}, rightEdge: ${this.rightEdge()}`);
  }
}
