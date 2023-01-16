

const imag: HTMLDivElement |null  = document.querySelector(".imag");

const photoContainer = [];


function addPhoto() {
    try {


        for (let i = 0; i < 5; i++) {
            let userPhoto: string | null = prompt("Enter your photo please");

            if (userPhoto == null || imag == null) {
                alert('you did not enter a Photo address')
                return new Error('you did not enter a Photo address');
                
            }

            else {
                imag.innerHTML = `<img src='${userPhoto}'/>`
                photoContainer.push(userPhoto);
            }

        }
    } catch (error) {
        console.error(error)
        return false
    }
}
// addPhoto()




