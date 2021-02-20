class Obstacle extends BoundingBox {
  constructor(minWidth, maxWidth, minHeight, maxHeight) {
    const width = minWidth + Math.floor((maxWidth - minWidth) * Math.random());
    const xPos = Math.floor((maxWidth - width) * Math.random());
    const height =
      minHeight + Math.floor((maxHeight - minHeight) * Math.random());
    super(xPos, 0, width, height);
  }

  move(interval) {
    this.yPosition += interval;
  }
}
