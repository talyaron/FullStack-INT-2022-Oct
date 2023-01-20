const cricle: any = document.querySelector(".cricle");


//     cricle.addEventListener("mousemove", (event) => {
//       cricle.innerText = `(${event.x},${event.y})`;
//       console.log(event)
//   });
  cricle.addEventListener("mouseenter", (event) => {
    cricle.style.backgroundColor = 'red';
    cricle.style.top= `${randomMove()[1]}%`
    cricle.style.right= `${randomMove()[0]}%`

  });

 console.log(randomMove())