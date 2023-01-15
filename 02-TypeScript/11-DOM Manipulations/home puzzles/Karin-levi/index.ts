const box: HTMLImageElement | null = document.querySelector("#box")
console.dir(box)


for (let i = 0; i < 5; i++) {
    let img = document.createElement('img');
    const imageUrl: string | null = prompt('Enter image URL');
    if (imageUrl && box) {
        img.src = imageUrl;
        box.appendChild(img);
    }
}


// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTuHDykLTCD8eL-PdWTkTdUHf7eSfESUa9C88Oa05fvs58cE06JPZGQZP3136qoLwtIk&usqp=CAU
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3unyHF03qwWebb8u3c_K456JP6fvMIm1zmIKbrVKIrqQSXUjmJKUYUCKdC4jCq0CLxWA&usqp=CAU
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3ScpAoCxMoKqXK-FsaT3B4ZOYOKIBhUmZEpWVEREv7jo5RrJwj0M9ck6z2iMrDt82zs&usqp=CAU
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT-T5i_-We1MbFSpYES0UNfcldOhPwtD_4UbjmspdI4xgWdPZ-4cCarGUUkcpply6JEc&usqp=CAU
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjFQ90ekTT9p86GBs_Q134CPED7mQGHXZ0hcy2FHKC7Dn4pNhycxwor8foGe3ZhAvQ3o&usqp=CAU