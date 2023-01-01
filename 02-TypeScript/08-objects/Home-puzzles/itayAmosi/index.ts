interface Movies {
  name: string
  parice: Number
  Last_rental: Number
  rented: String
  type_of_movie: string
}
interface Users {
  name: string
  age: Number
  Address: string
  phone: Number
}
interface directors {
  name: string
  type_of_movies: String
  Total_film_directing: Number
}

const Black_Adam: Movies = {
  name: 'Black_Adam',
  parice: 44.99,
  Last_rental: 25 - 4 - 2021,
  rented: 'No',
  type_of_movie: 'Action',
}
const Spirited: Movies = {
  name: 'Spirited',
  parice: 49.99,
  Last_rental: 20 - 11 - 2022,
  rented: 'Yes',
  type_of_movie: 'Musical/Comedy',
}
const Emancipation: Movies = {
  name: 'Emancipation',
  parice: 69.99,
  Last_rental: 31 - 11 - 2022,
  rented: 'Yes',
  type_of_movie: 'Drama/Action',
}
const Nope: Movies = {
  name: 'Nope',
  parice: 39.99,
  Last_rental: 5 - 4 - 2019,
  rented: 'No',
  type_of_movie: 'Horror',
}
const tomer: Users = {
  name: 'Tomer',
  age: 21,
  Address: 'Rachel the poet, 65, Haifa',
  phone: 123,
}
const matan: Users = {
  name: 'Matan',
  age: 46,
  Address: 'Moses Nussbaum, 23, Tel Aviv',
  phone: 2232325,
}

const Welcome = prompt(`Welcome to BLOCKBUSTER
Enter a username and click OK`)
console.log(`A username has been entered: ${Welcome}`)

const dollarToShekel: Function = (dTS: number): number | false => {
  try {
    return dTS * 3.35
  } catch (error) {
    alert(`Error`)
    console.error(Error)
    return false
  }
}
// const myButton = document.getElementById('myBtn');
// myButton?.addEventListener(`clic`, function (e) {
//   const name = alert(`this move rent`)
//   console.log(name);
// });
