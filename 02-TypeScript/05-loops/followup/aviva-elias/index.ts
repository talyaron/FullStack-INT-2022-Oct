//while loop
var shouldIContinue: boolean = true;

while (shouldIContinue === true) {
  shouldIContinue = confirm("Should I continue?");
  console.log(shouldIContinue);
}
for (var i = 0; i < 100; i++) {
  if (i % 5 == 0) {
    console.log(i)
  }
}


