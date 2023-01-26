const userViewer = document.querySelector(`.wrapper__userViewer`);
const image = document.querySelector(`#image`)
let imgUrl:any = ``;
if (image) {
    image.addEventListener("change", function(){
        const reader:FileReader = new FileReader;
        reader.addEventListener("load", ()=>{
            imgUrl=reader.result;
        })
        reader.readAsDataURL(this.files[0])
    })
}
