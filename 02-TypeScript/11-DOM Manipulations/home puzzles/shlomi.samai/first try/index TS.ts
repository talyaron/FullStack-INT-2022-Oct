console.dir(document)

const imgInput=prompt("what is your URL?");

const test:HTMLDivElement|null=document.querySelector("#myFirstDOM");

if (imgInput!==null && test ) {
  //console.dir(test);
  test.innerHTML=`<div class="myFirstDOM">
  <img src='${imgInput}'/>
  </div>`;

 

  const newElement= document.createElement('div');
  newElement.innerHTML=`<div class="myFirstDOM">
  <img src='${imgInput}'/>
  </div>`;
  
  if (newElement!==null){
  document.getElementById("myFirstDOM").appendChild(newElement);
  }
}