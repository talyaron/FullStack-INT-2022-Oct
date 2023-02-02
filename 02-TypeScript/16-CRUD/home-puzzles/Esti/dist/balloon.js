var w_factor = 0.333;
var h_factor = 0.4;
var curvature = (4 * (Math.sqrt(2) - 1)) / 3;
var tie_w_factor = 0.12;
var tie_h_factor = 0.10;
var tie_curve_factor = 0.13;
function Balloon(centerX, centerY, radius, color) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius * .85;
    this.baseColor = color;
}
Balloon.prototype.draw = function () {
    var centerX = this.centerX;
    var centerY = this.centerY;
    var radius = this.radius;
    var handleLength = curvature * radius;
    var widthDiff = (radius * w_factor);
    var heightDiff = (radius * h_factor);
    var balloonBottomY = centerY + radius + heightDiff;
    ctx.beginPath();
    // Section to draw the Top Left Curve
    var topLeftCurveStartX = centerX - radius;
    var topLeftCurveStartY = centerY;
    var topLeftCurveEndX = centerX;
    var topLeftCurveEndY = centerY - radius;
    ctx.moveTo(topLeftCurveStartX, topLeftCurveStartY);
    ctx.bezierCurveTo(topLeftCurveStartX, topLeftCurveStartY - handleLength - widthDiff, topLeftCurveEndX - handleLength, topLeftCurveEndY, topLeftCurveEndX, topLeftCurveEndY);
    var topRightCurveStartX = centerX;
    var topRightCurveStartY = centerY - radius;
    var topRightCurveEndX = centerX + radius;
    var topRightCurveEndY = centerY;
    ctx.bezierCurveTo(topRightCurveStartX + handleLength + widthDiff, topRightCurveStartY, topRightCurveEndX, topRightCurveEndY - handleLength, topRightCurveEndX, topRightCurveEndY); // The 2 Control points are placed in a way to get a bigger arc on the top 
    // Section to draw the Bottom Right Curve
    var bottomRightCurveStartX = centerX + radius;
    var bottomRightCurveStartY = centerY;
    var bottomRightCurveEndX = centerX;
    var bottomRightCurveEndY = balloonBottomY;
    ctx.bezierCurveTo(bottomRightCurveStartX, bottomRightCurveStartY + handleLength, bottomRightCurveEndX + handleLength, bottomRightCurveEndY, bottomRightCurveEndX, bottomRightCurveEndY); // The 2 Control points are placed in a way to get a a smaller curve at the bottom
    // Section to draw the Bottom Left Curve
    var bottomLeftCurveStartX = centerX;
    var bottomLeftCurveStartY = balloonBottomY;
    var bottomLeftCurveEndX = centerX - radius;
    var bottomLeftCurveEndY = centerY;
    ctx.bezierCurveTo(bottomLeftCurveStartX - handleLength, bottomLeftCurveStartY, bottomLeftCurveEndX, bottomLeftCurveEndY + handleLength, bottomLeftCurveEndX, bottomLeftCurveEndY); // The 2 Control points are 
    //placed in a way to get a a smaller curve at the bottom
    ctx.fillStyle = this.baseColor;
    ctx.fill();
    // End balloon path
    // Create balloon tie
    var halfTieWidth = (radius * tie_w_factor) / 2;
    var tieHeight = (radius * tie_h_factor);
    var tieCurveHeight = (radius * tie_curve_factor);
    ctx.beginPath();
    ctx.moveTo(centerX - 1, balloonBottomY);
    ctx.lineTo(centerX - halfTieWidth, balloonBottomY + tieHeight);
    ctx.quadraticCurveTo(centerX, balloonBottomY + tieCurveHeight, centerX + halfTieWidth, balloonBottomY + tieHeight);
    ctx.lineTo(centerX + 1, balloonBottomY); // Quadratic Curve to make a slightly curved triangle at the bottom
    ctx.fill();
};
