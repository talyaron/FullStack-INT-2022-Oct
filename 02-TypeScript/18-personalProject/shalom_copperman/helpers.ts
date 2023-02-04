function uid(length) {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");

  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }

  let str = "";
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

function dropdown(arr: [], selectId: string) {
  const select:HTMLElement | null = document.getElementById(selectId);
  for (let i = 0; i < arr.length; i++) {
    const option = document.createElement("option");
    const txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value", arr[i]);
    if (select) {
      select.insertBefore(option, select.lastChild);
    }
   
  }

}
