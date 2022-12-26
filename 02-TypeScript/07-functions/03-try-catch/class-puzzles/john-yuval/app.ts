function product (the_product:string|null){
    
switch (the_product) {
  case "ice cream":
    result = "8";
    break;
  case "cake":
    result = "70";
    break;
  case "cookie":
    result = "5";
    break;
    default:
        console.error("your choice is wrong!")
    
}
return result;
}

const answer = prompt("which product you want?")
var result = product(answer);


if (result && !isNaN(result)) {
    console.log(`it should cost you ${result} nis`)
  } else {
    alert("we have an error");
  }