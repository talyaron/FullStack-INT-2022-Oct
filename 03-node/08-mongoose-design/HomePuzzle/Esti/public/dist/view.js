// import { log } from "console"
// import { log } from "console"
function renderTeacherStudent(divClass) {
    try {
        var divName = "";
        if (divClass === "Teacher")
            divName = "teacher";
        if (divClass === "Student")
            divName = "student";
        var html = "\n        <div class=\"singin\">\n            <button class=\"goBack\" onclick=\"hendelGoBack()\">Go back</button>\n\n            <form class=\"form\" onsubmit=\"hendelSingIn('" + divName + "')\">\n                <input type=\"text\" name=\"name\" placeholder='" + divClass + " Name' required>\n                <input type=\"password\" name=\"password\" placeholder=\"Password\" required>\n                <button class=\"submit\">Sing in</button>\n            </form>\n            <button class=\"singupBtn\" onclick=\"renderSingUp('" + divClass + "', event)\">Sing Up</button>\n        </div>\n\n        ";
        console.log(html);
        var container = document.querySelector(".container");
        if (!container)
            throw new Error('Cotainer div dont in the DOM');
        container.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderSingUp(divClass) {
    try {
        var divName = "";
        if (divClass === "Teacher")
            divName = "teacher";
        if (divClass === "Student")
            divName = "student";
        var functionName = "hendelAdd" + divClass;
        var html = "\n            <div class=\"" + divName + "\">\n                <button class=\"goBack\" onclick=\"hendelGoBack()\">Go back</button>\n            \n                <form class=\"form\" onsubmit=\"" + functionName + "(event)\">\n                    <input type=\"text\" name=\"name\" placeholder=\"" + divClass + " Name\"  required>\n                    <input type=\"email\" name=\"email\" placeholder=\"" + divClass + " Email\"  required>\n                    <input type=\"password\" name=\"password\" placeholder=\"Password\"  required>\n                    <button class=\"submit\">Add " + divName + "</button>\n                </form>\n            </div>\n           ";
        var container = document.querySelector(".container");
        if (!container)
            throw new Error('Cotainer div dont in the DOM');
        container.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
