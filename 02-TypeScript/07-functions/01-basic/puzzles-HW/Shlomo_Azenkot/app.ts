const btn = document.getElementById("btn");

btn?.addEventListener("click",(event)=>{

  // 👇️ const input: HTMLInputElement | null
const input = document.getElementById('input') as HTMLInputElement;
const value :string | undefined = input?.value;


// const reversedNum = value => parseFloat(value.toString().split('').reverse().join('')) * Math.sign(value);





function reversedNum(value){
    return (parseFloat(value.toString().split('').reverse().join('')) * Math.sign(value)).toString();                
  }
  const reverse = reversedNum(value);

let result = document.getElementById("result")as HTMLHeadElement;
result.innerHTML=reverse;













// input?.addEventListener('input', function (event) {
//   const target = event.target as HTMLInputElement;
//   console.log(target.value);
// });






});



// function reverseNumber(reverse:number):number{
//   return reverse;
// };