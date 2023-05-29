//delayed function, async

//callback
document.querySelector("#root")?.addEventListener("click", cb);

function cb(ev: any) {
  console.log("clicked!");
}

//promise
fetch("https://dog.ceo/api/breeds/image/random")
  .then((responce) => {
    console.log(responce);
    return responce.json();
  })
  .then((data) => console.log(data));

//async await
async function getDog(url: string): Promise<Object | undefined> {
  try {
    const responce = await fetch(url);
    const data = await responce.json();

    console.log(data);
    return data;
  } catch (error) {
    return undefined;
  }
}
async function get2() {
  const [data1, data2] = await Promise.all([
    getDog("https://dog.ceo/api/breed/Affenpinscher/images/random"),
    getDog("https://dog.ceo/api/breeds/image/random"),
  ]);
  console.log(data1, data2);
}
get2();
