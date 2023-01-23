function getCall(): Call {
    return new Call(makeString(5), "August 19, 23:15:30", "in", "video", "htttp://contactPicture.com");
}

function renderCalls(calls: Call[]): void {
    try {

        let html = `<div id="callsList" class="wrapper__callsList">`;

        for (let i = 0; i < calls.length; i++) {
            html += `<div class="wrapper__callsList__call1">
        <div class="wrapper__callsList__call1__leftItem">
            <i class="fa-solid fa-circle"></i>
        </div>
        <div class="wrapper__callsList__call1__centerItems">
            <div class="wrapper__callsList__call1__centerItems__userName">
                ${calls[i].name}
            </div>
            <div class="wrapper__callsList__call1__centerItems__bottom">
                <div class="wrapper__callsList__call1__centerItems__bottom__arrowIcon">
                    <i class="fa-solid fa-arrow-up-long"></i>
                </div>
                <div class="wrapper__callsList__call1__centerItems__bottom__callTime">
                    ${calls[i].date}
                 </div>
            </div>
            
        </div>
        <div class="wrapper__callsList__call1__rigthItems">
            <div class="wrapper__callsList__call1__rigthItems__videoIcon">
                <i class="fa-solid fa-video"></i>
            </div>

        </div>
        
    </div>`
        }
        html += "</div>"
        
        const rootCallList = document.querySelector("#test");
        if (!rootCallList) throw new Error("couldnt find root element of call list");
        rootCallList.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

