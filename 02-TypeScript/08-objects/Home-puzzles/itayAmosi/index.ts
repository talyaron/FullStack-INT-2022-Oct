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

const Black_Adam: Movies = {
  name: 'Black_Adam',
  parice: 44.99,
  Last_rental: 25 - 4 - 2021,
  rented: 'No',
  type_of_movie: 'Action',
}
const Spirited: Movies = {
  name: 'Spirited',
  parice: 34.99,
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
  phone: 5896523,
}
const matan: Users = {
  name: 'Matan',
  age: 46,
  Address: 'Moses Nussbaum, 23, Tel Aviv',
  phone: 2232325,
}
const Welcome =prompt(`Welcome to BLOCKBUSTER
Enter a username and click OK`)
const enter: Function = () => {
  try {

    if (Welcome == ' ' || !Welcome) {
      alert(`It is not possible to register without a username
  Please refresh the site and enter a username again`)
enter()
    } else {
      alert(`Hi,${Welcome},
      thanks for signing up!`)
      return Welcome
    }
  } catch (error) {}
}
enter()
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
const myButton1: any = document.getElementById('Black_Adam')
const clickedRent = myButton1.click
myButton1.addEventListener(`click`, function (e) {
  ;+alert(`this movie rent by ${matan.name}
  is ${matan.age} years old
  and is lives in ${matan.Address}
  is phone number ${matan.phone}`)
})
const myButton2: any = document.getElementById('Spirited')
const clickedNoRent = myButton2.click
myButton2.addEventListener(`click`, function (e) {
  alert(
    `this move is no rent by nobody!
    You can rent the movie for ${Spirited.parice} Dollars,
    (Enter OK to Continue to Rent)`,
  )
  if (myButton2) {
    return alert(`Thanks ${Welcome} You rented the movie for ${Spirited.parice},
      by the way the price in shekels is ${dollarToShekel(Spirited.parice)}.`)
  }
})
const myButton3: any = document.getElementById('Emancipation')
const clickedRent2 = myButton3.click
myButton3.addEventListener(`click`, function (e) {
  ;+alert(`this movie rent by ${tomer.name}
  is ${tomer.age} years old
  and is lives in ${tomer.Address}
  is phone number ${tomer.phone}`)
})
const comingSoon: any = document.getElementById('Nope')
const notArrived = comingSoon.click
comingSoon.addEventListener(`click`, function (e) {
  alert(`this movie Not Arrived`)
})
const comingSoon2: any = document.getElementById('White_Noise')
const notArrived2 = comingSoon2.click
comingSoon2.addEventListener(`click`, function (e) {
  alert(`this movie Not Arrived`)
})
const comingSoon3: any = document.getElementById('Strange_World')
const notArrived3 = comingSoon3.click
comingSoon3.addEventListener(`click`, function (e) {
  alert(`this movie Not Arrived`)
})
const checkMoney1: any = document.getElementById('checkMoney1')
const clicked1 = checkMoney1.click
checkMoney1.addEventListener(`click`, function (e) {
  alert(`44.99 dollars,
  Click OK for the rental and the price in shekels `)
  try {
    if (myButton1) {
      return alert(`This movie is already rented by ${matan.name},
       by the way its price is ${dollarToShekel(Black_Adam.parice)} Shekels`)
    }
  } catch (error) {}
})
const checkMoney2: any = document.getElementById('checkMoney2')
const clicked2 = checkMoney2.click
checkMoney2.addEventListener(`click`, function (e) {
  alert(`${Spirited.parice} Dollars,
  Click OK for the rental and the price in shekels `)
  try {
    if (myButton1) {
      return alert(`${dollarToShekel(Spirited.parice)} in shekel`)
    }
  } catch (error) {}
})
const checkMoney3: any = document.getElementById('checkMoney3')
const clicked3 = checkMoney3.click
checkMoney3.addEventListener(`click`, function (e) {
  alert(`${Emancipation.parice} Dollars,
  Click OK for the rental and the price in shekels `)
  try {
    if (myButton3) {
      return alert(`This movie is already rented by ${tomer.name},
       by the way its price is ${dollarToShekel(Emancipation.parice)} Shekels`)
    }
  } catch (error) {}
})
