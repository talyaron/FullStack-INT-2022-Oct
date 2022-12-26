var btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (event) {
    // 👇️ const input: HTMLInputElement | null
    var input = document.getElementById('input');
    var value = input === null || input === void 0 ? void 0 : input.value;
    // const reversedNum = value => parseFloat(value.toString().split('').reverse().join('')) * Math.sign(value);
    function reversedNum(value) {
        return (parseFloat(value.toString().split('').reverse().join('')) * Math.sign(value)).toString();
    }
    var reverse = reversedNum(value);
    var result = document.getElementById("result");
    result.innerHTML = reverse;
    // input?.addEventListener('input', function (event) {
    //   const target = event.target as HTMLInputElement;
    //   console.log(target.value);
    // });
});
// function reverseNumber(reverse:number):number{
//   return reverse;
// };
