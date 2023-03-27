var myBox1 = document.querySelector("#myBox");
if (myBox1) {
    myBox1.addEventListener("click", function (event) {
        console.log(event);
    });
    myBox1.addEventListener("mousemove", function (event) {
        myBox1.innerText = "(" + event.x + "," + event.y + ")";
    });
}
var boxes1 = document.querySelectorAll(".box1");
boxes1.forEach(function (box) {
    box.addEventListener("mousemove", function (event) {
        box.innerText = "(" + event.x + "," + event.y + ")";
    });
    box.addEventListener("mouseenter", function (event) {
        box.style.backgroundColor = 'black';
    });
    box.addEventListener("mouseout", function (event) {
        box.style.backgroundColor = 'teal';
    });
});
var myBox2 = document.querySelector("#myBox");
if (myBox2) {
    myBox2.addEventListener("click", function (event) {
        console.log(event);
    });
}
var boxes2 = document.querySelectorAll(".box2");
boxes2.forEach(function (box) {
    box.addEventListener("click", function (event) {
        box.innerText = "tanx";
    });
    box.addEventListener("mouseenter", function (event) {
        box.style.backgroundColor = 'red';
    });
    box.addEventListener("mouseout", function (event) {
        box.style.backgroundColor = 'teal';
    });
});
var myBox3 = document.querySelector("#myBox");
if (myBox3) {
    myBox3.addEventListener("click", function (event) {
        console.log(event);
    });
}
var boxes3 = document.querySelectorAll(".box3");
boxes3.forEach(function (box) {
    box.addEventListener("mouseout", function (event) {
        box.innerText = "why u leave :(";
    });
    box.addEventListener("mouseenter", function (event) {
        box.style.backgroundColor = 'green';
    });
    box.addEventListener("mouseout", function (event) {
        box.style.backgroundColor = 'teal';
    });
});
var myBox4 = document.querySelector("#myBox");
if (myBox4) {
    myBox4.addEventListener("click", function (event) {
        console.log(event);
    });
    myBox4.addEventListener("mousemove", function (event) {
        myBox4.innerText = "(" + event.x + "," + event.y + ")";
    });
}
var boxes4 = document.querySelectorAll(".box4");
// console.dir(boxes);
boxes4.forEach(function (box) {
    box.addEventListener("wheel", function (event) {
        box.innerText = "your  10 from 10";
    });
    box.addEventListener("mouseenter", function (event) {
        box.style.backgroundColor = 'blue';
    });
    box.addEventListener("mouseout", function (event) {
        box.style.backgroundColor = 'teal';
    });
});
var myBox5 = document.querySelector("#myBox");
if (myBox5) {
    myBox5.addEventListener("click", function (event) {
        console.log(event);
    });
}
var boxes5 = document.querySelectorAll(".box5");
boxes5.forEach(function (box) {
    box.addEventListener("copy", function (event) {
        box.innerText = "now u can paste";
    });
    box.addEventListener("mouseenter", function (event) {
        box.style.backgroundColor = 'pink';
    });
    box.addEventListener("mouseout", function (event) {
        box.style.backgroundColor = 'teal';
    });
});
var myBox6 = document.querySelector("#myBox");
if (myBox6) {
    myBox6.addEventListener("click", function (event) {
        console.log(event);
    });
}
var boxes6 = document.querySelectorAll(".box6");
boxes6.forEach(function (box) {
    box.addEventListener("paste", function (event) {
        box.innerText = "good job :)";
    });
    box.addEventListener("mouseenter", function (event) {
        box.style.backgroundColor = 'gray';
    });
    box.addEventListener("mouseout", function (event) {
        box.style.backgroundColor = 'teal';
    });
});
