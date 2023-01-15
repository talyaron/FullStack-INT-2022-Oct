console.dir(document);
var imgInput = prompt("what is your URL?");
var test = document.querySelector("#myFirstDOM");
if (imgInput !== null && test) {
    console.dir(test);
    test.innerHTML = "<div class=\"myFirstDOM\">\n  <img src='" + imgInput + "'/>\n  </div>";
}
