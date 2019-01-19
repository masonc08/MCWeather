/**
 * Creates the desired type of picture.
 * @class
 * @constructor
 * @param {image} img - The image to be displayed.
 * @param {number} s - The width and length of the image. The image is always to be a square.
 */
function Picture(img, s) {
  this.img = img;
  this.picLength = s;
  /**
   * @param {number} x - The x location of the picture.
   * @param {number} y - The y location of the picture.
   */
  this.display = function(x, y) {
    this.xLoc = x;
    this.yLoc = y;
    image(this.img, this.xLoc, this.yLoc, this.picLength, this.picLength);
  }
}

