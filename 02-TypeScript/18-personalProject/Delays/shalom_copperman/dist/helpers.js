function uid(length) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }
    var str = "";
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function dropdown(arr, selectId) {
    var select = document.getElementById(selectId);
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement("option");
        var txt = document.createTextNode(arr[i]);
        option.appendChild(txt);
        option.setAttribute("value", arr[i]);
        if (select) {
            select.insertBefore(option, select.lastChild);
        }
    }
}
