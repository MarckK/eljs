function Vector (x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype = {
  plus: function(otherVector) {
    let newX = this.x + otherVector.x;
    let newY = this.y +otherVector.y;
    return new Vector(newX, newY);
  },
  minus: function(otherVector) {
    let newX = this.x - otherVector.x;
    let newY = this.y - otherVector.y;
    return new Vector(newX, newY);
  },
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
};
