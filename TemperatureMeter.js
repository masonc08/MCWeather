/**
* Creates a temperature meter.
* @class
* @constructor
*/
function TemperatureMeter() {
  /**
  * Displays the temperature meter to the screen.
  * @param {number} x - The x location of the picture.
  * @param {number} y - The y location of the picture.
  * @param {number} w - The width of the picture
  * @param {number} h - The height of the picture.
  */
  this.display = function (x, y, w, h){
    push();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.strokeWeight = 5;
    strokeWeight(this.strokeWeight);
    fill(this.meterColorH, this.meterColorS, this.meterColorL);
    rect(this.x, this.y, this.w, this.h);
    for (var i = this.x; i <= this.x + this.w; i+= this.w/20) {
      line(i, this.h + this.y, i, this.h + this.y - 10);
    }
    textAlign(CENTER);
    fill(0);
    noStroke();
    for (var i = -3; i <= 3; i++) {
      text(Math.round(temp) + i * 3 + "°C", this.x + this.w/2 + i * 60, this.y + this.h + 25);
    }
    strokeWeight(this.w * this.h / 1000);
    stroke(this.dotColorH, this.dotColorS, this.dotColorL);
    point(this.x + this.w/2, this.y + this.h/2);
    pop();
  }
  /**
  * Changes the dot color
  * @param {number} h - The hue of the dot
  * @param {number} s - The saturation of the dot
  * @param {number} l - The lumosity of the dot
  */
  this.dotColor = function (h, s, l){
    this.dotColorH = h;
    this.dotColorS = s;
    this.dotColorL = l;
  }
  /**
  * Changes the meter's background color
  * @param {number} h - The hue of the meter
  * @param {number} s - The saturation of the meter
  * @param {number} l - The lumosity of the meter
  */
  this.meterColor = function (h, s, l){
    this.meterColorH = h;
    this.meterColorS = s;
    this.meterColorL = l;
  }
}
