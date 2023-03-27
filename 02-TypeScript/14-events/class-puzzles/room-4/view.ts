const myBox1: HTMLElement|null = document.querySelector("#myBox");
if (myBox1) {
  myBox1.addEventListener("click", (event) => {
    console.log(event);
  });

  myBox1.addEventListener("mousemove", (event) => {
    myBox1.innerText = `(${event.x},${event.y})`;
  });
}

const boxes1: any = document.querySelectorAll(".box1");


boxes1.forEach((box) => {
  box.addEventListener("mousemove", (event) => {
    box.innerText = `(${event.x},${event.y})`;
  });
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = 'black';
  });
  box.addEventListener("mouseout", (event) => {
    box.style.backgroundColor = 'teal';
  });
});


const myBox2: HTMLElement|null = document.querySelector("#myBox");
if (myBox2) {
  myBox2.addEventListener("click", (event) => {
    console.log(event);
  });
}

const boxes2: any = document.querySelectorAll(".box2");


boxes2.forEach((box) => {
  box.addEventListener("click", (event) => {
    box.innerText = `tanx`;
  });
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = 'red';
  });
  box.addEventListener("mouseout", (event) => {
    box.style.backgroundColor = 'teal';
  });
});






const myBox3: HTMLElement|null = document.querySelector("#myBox");
if (myBox3) {
  myBox3.addEventListener("click", (event) => {
    console.log(event);
  });

}

const boxes3: any = document.querySelectorAll(".box3");


boxes3.forEach((box) => {
  box.addEventListener("mouseout", (event) => {
    box.innerText = `why u leave :(`;
  });
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = 'green';
  });
  box.addEventListener("mouseout", (event) => {
    box.style.backgroundColor = 'teal';
  });
});


const myBox4: HTMLElement|null = document.querySelector("#myBox");
if (myBox4) {
  myBox4.addEventListener("click", (event) => {
    console.log(event);
  });

  myBox4.addEventListener("mousemove", (event) => {
    myBox4.innerText = `(${event.x},${event.y})`;
  });
}

const boxes4: any = document.querySelectorAll(".box4");

// console.dir(boxes);

boxes4.forEach((box) => {
  box.addEventListener("wheel", (event) => {
    box.innerText = `your  10 from 10`;
  });
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = 'blue';
  });
  box.addEventListener("mouseout", (event) => {
    box.style.backgroundColor = 'teal';
  });
});


const myBox5: HTMLElement|null = document.querySelector("#myBox");
if (myBox5) {
  myBox5.addEventListener("click", (event) => {
    console.log(event);
  });
}

const boxes5: any = document.querySelectorAll(".box5");

boxes5.forEach((box) => {
  box.addEventListener("copy", (event) => {
    box.innerText = `now u can paste`;
  });
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = 'pink';
  });
  box.addEventListener("mouseout", (event) => {
    box.style.backgroundColor = 'teal';
  });
});



const myBox6: HTMLElement|null = document.querySelector("#myBox");
if (myBox6) {
  myBox6.addEventListener("click", (event) => {
    console.log(event);
  });
}

const boxes6: any = document.querySelectorAll(".box6");

boxes6.forEach((box) => {
  box.addEventListener("paste", (event) => {
    box.innerText = `good job :)`;
  });
  box.addEventListener("mouseenter", (event) => {
    box.style.backgroundColor = 'gray';
  });
  box.addEventListener("mouseout", (event) => {
    box.style.backgroundColor = 'teal';
  });
});