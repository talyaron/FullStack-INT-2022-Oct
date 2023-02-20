console.dir(document);
const root: HTMLDivElement | null = document.querySelector("#root");
if(root){
    let id = 0;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 50);
    
    function frame() {
        try {
            if (pos==100) {
                clearInterval(id);
              } else {
                pos++;
                if (root!=null)
                    root.style.borderRadius= pos + "px";
              } 
        } catch (error) {
            console.error(error)
            return false;
        }
    }
}  
    

