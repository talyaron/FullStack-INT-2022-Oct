const w_factor = 0.333
const h_factor = 0.4
const curvature = (4 * (Math.sqrt(2) - 1)) / 3
const tie_w_factor = 0.12;
const tie_h_factor = 0.10;
const tie_curve_factor = 0.13;

function Balloon(centerX, centerY, radius, color) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius * .85;
    this.baseColor = color;  
}

Balloon.prototype.draw = function () {
    const centerX = this.centerX;
    const centerY = this.centerY;
    const radius = this.radius;
    const handleLength = curvature * radius; 
    const widthDiff = (radius * w_factor); 
    const heightDiff = (radius * h_factor);
    const balloonBottomY = centerY + radius + heightDiff; 
   
       
    ctx!.beginPath();
    // Section to draw the Top Left Curve
    const topLeftCurveStartX = centerX - radius;
    const topLeftCurveStartY = centerY;
    const topLeftCurveEndX = centerX;
    const topLeftCurveEndY = centerY - radius;
    ctx!.moveTo(topLeftCurveStartX, topLeftCurveStartY);
    ctx!.bezierCurveTo(topLeftCurveStartX, topLeftCurveStartY - handleLength - widthDiff,
        topLeftCurveEndX - handleLength, topLeftCurveEndY,
        topLeftCurveEndX, topLeftCurveEndY); 
    const topRightCurveStartX = centerX;
    const topRightCurveStartY = centerY - radius;
    const topRightCurveEndX = centerX + radius;
    const topRightCurveEndY = centerY;
    ctx!.bezierCurveTo(topRightCurveStartX + handleLength + widthDiff, topRightCurveStartY,
        topRightCurveEndX, topRightCurveEndY - handleLength,
        topRightCurveEndX, topRightCurveEndY);  // The 2 Control points are placed in a way to get a bigger arc on the top 
    // Section to draw the Bottom Right Curve
    const bottomRightCurveStartX = centerX + radius;
    const bottomRightCurveStartY = centerY;
    const bottomRightCurveEndX = centerX;
    const bottomRightCurveEndY = balloonBottomY;
    ctx!.bezierCurveTo(bottomRightCurveStartX, bottomRightCurveStartY + handleLength,
        bottomRightCurveEndX + handleLength, bottomRightCurveEndY,
        bottomRightCurveEndX, bottomRightCurveEndY);  // The 2 Control points are placed in a way to get a a smaller curve at the bottom
    // Section to draw the Bottom Left Curve
    const bottomLeftCurveStartX = centerX;
    const bottomLeftCurveStartY = balloonBottomY;
    const bottomLeftCurveEndX = centerX - radius;
    const bottomLeftCurveEndY = centerY;
    ctx!.bezierCurveTo(bottomLeftCurveStartX - handleLength, bottomLeftCurveStartY,
        bottomLeftCurveEndX, bottomLeftCurveEndY + handleLength,
        bottomLeftCurveEndX, bottomLeftCurveEndY);  // The 2 Control points are 
    //placed in a way to get a a smaller curve at the bottom
    ctx!.fillStyle = this.baseColor;
    ctx!.fill();
    // End balloon path
    // Create balloon tie
    const halfTieWidth = (radius * tie_w_factor) / 2;
    const tieHeight = (radius * tie_h_factor);
    const tieCurveHeight = (radius * tie_curve_factor);
    ctx!.beginPath();
    ctx!.moveTo(centerX - 1, balloonBottomY);
    ctx!.lineTo(centerX - halfTieWidth, balloonBottomY + tieHeight);
    ctx!.quadraticCurveTo(centerX, balloonBottomY + tieCurveHeight,
        centerX + halfTieWidth, balloonBottomY + tieHeight);
    ctx!.lineTo(centerX + 1, balloonBottomY); // Quadratic Curve to make a slightly curved triangle at the bottom
    ctx!.fill();
}

