const DIRECTION = {
  LEFT: "left",
  RIGHT: "right",
};

class BoundingBox {
  constructor(xPos, yPos, width, height) {
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.width = width;
    this.height = height;
  }

  leftEdge() {
    return this.xPosition;
  }

  rightEdge() {
    return this.xPosition + this.width;
  }

  static collides(box1, box2) {
    if (
      box1.xPosition < box2.xPosition + box2.width &&
      box1.xPosition + box1.width > box2.xPosition &&
      box1.yPosition < box2.yPosition + box2.height &&
      box1.yPosition + box1.height > box2.yPosition
    ) {
      return true;
    }
    return false;
  }
}
