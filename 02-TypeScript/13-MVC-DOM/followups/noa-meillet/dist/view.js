var boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) { return box.innerHTML += "<div class=\"box__little_box\"></div>"; });
