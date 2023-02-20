const btn:HTMLDivElement | null = document.querySelector("#btn");
if (btn){

    btn.addEventListener('click', function onClick() {
    function RandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        return color;
      }
      btn.style.backgroundColor = RandomColor();
});
}






  