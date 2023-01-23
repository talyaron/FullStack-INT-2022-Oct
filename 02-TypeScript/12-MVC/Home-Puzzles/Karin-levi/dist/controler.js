function getCall() {
    return new Call(makeString(5), "August 19, 23:15:30", "in", "video", "htttp://contactPicture.com");
}
function renderCalls(calls) {
    try {
        var html = "<div id=\"callsList\" class=\"wrapper__callsList\">";
        for (var i = 0; i < calls.length; i++) {
            html += "<div class=\"wrapper__callsList__call1\">\n        <div class=\"wrapper__callsList__call1__leftItem\">\n            <i class=\"fa-solid fa-circle\"></i>\n        </div>\n        <div class=\"wrapper__callsList__call1__centerItems\">\n            <div class=\"wrapper__callsList__call1__centerItems__userName\">\n                " + calls[i].name + "\n            </div>\n            <div class=\"wrapper__callsList__call1__centerItems__bottom\">\n                <div class=\"wrapper__callsList__call1__centerItems__bottom__arrowIcon\">\n                    <i class=\"fa-solid fa-arrow-up-long\"></i>\n                </div>\n                <div class=\"wrapper__callsList__call1__centerItems__bottom__callTime\">\n                    " + calls[i].date + "\n                 </div>\n            </div>\n            \n        </div>\n        <div class=\"wrapper__callsList__call1__rigthItems\">\n            <div class=\"wrapper__callsList__call1__rigthItems__videoIcon\">\n                <i class=\"fa-solid fa-video\"></i>\n            </div>\n\n        </div>\n        \n    </div>";
        }
        html += "</div>";
        var rootCallList = document.querySelector("#test");
        if (!rootCallList)
            throw new Error("couldnt find root element of call list");
        rootCallList.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
