var boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) { return box.innerHTML += "<div class=\"box__little_box\"></div>"; });
var boxesParagraph = document.querySelectorAll(".box2__p");
boxesParagraph.forEach(function (paragraph) { paragraph.addEventListener('copy', function (event) { alert('You cant copy this text!'); }); });
boxesParagraph.forEach(function (paragraph) { paragraph.addEventListener('cut', function (event) { alert('You cant cut this text!'); }); });
document.addEventListener('keyup', function (event) {
    var keyName = event.key;
    var keyCode = event.code;
    alert("Keyup: The key pressed is " + keyName + " and its code value is " + keyCode);
}, false);
