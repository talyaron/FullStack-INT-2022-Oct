// const form = document.querySelector('#addNewForm') as HTMLFormElement;
// form.addEventListener('submit',async(e) => {
//     e.preventDefault()
//     if(!form) throw new Error("no form found")
//     try {
//         const formData = new FormData(form);
//         const newItem = {
//             title:formData.get(`title`),
//             image:formData.get(`image`),
//             paregraph:formData.get(`paregraph`),
//         };
//         const res = await fetch(`/admin`,{
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newItem) 
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//         // if(res.ok){
//         //     alert("new item added successfully");
//         //     form.reset();
//         // }else {
//         //     alert("item not found");
//         // }
//     } catch (error) {
//         console.error(error);
//     }
// })
