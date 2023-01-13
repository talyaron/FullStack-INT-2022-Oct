console.dir(document);
var root = document.querySelector("#root");
if (root) {
    var id_1 = 0;
    var pos_1 = 0;
    clearInterval(id_1);
    id_1 = setInterval(frame, 50);
    function frame() {
        try {
            if (pos_1 == 100) {
                clearInterval(id_1);
            }
            else {
                pos_1++;
                if (root != null)
                    root.style.borderRadius = pos_1 + "px";
            }
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}
