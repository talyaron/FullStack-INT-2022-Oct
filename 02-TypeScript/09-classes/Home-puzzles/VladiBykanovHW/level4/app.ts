class Dates {
  date: Date;
  hour: number;
  minute: number;
  seconds: number;
  year: number;
  month: number;
  day: number;

  constructor(date: Date) {
    this.date = date;
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.seconds = date.getSeconds();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDay() + 1;
  }

  dateFormat() {
    const dateToString = JSON.stringify(this.date)
      .replace(/[A-Z"]/g, " ")
      .trim()
      .split(" ");
    const properDateFormat = `${this.day}/${this.month}/${this.year}`
    return `Date Entered: ${properDateFormat} at ${dateToString[1]}`;
  }

  timePassed() {
    const theTimeOfUserInput = this.date.getTime();
    const currentTime = new Date().getTime();
    const timePassed = (currentTime - theTimeOfUserInput) / 1000;
    return `${timePassed} seconds past from that date`
  }
}

const aDate = new Date();
const newDate = new Dates(aDate);

console.log(newDate);
console.log(newDate.hour);
console.log(newDate.minute);
console.log(newDate.seconds);
console.log(newDate.year);
console.log(newDate.month);
console.log(newDate.day);
console.log(newDate.timePassed());
console.log(newDate.dateFormat());

const userInput = document.querySelector("#userInput") as HTMLInputElement;
const output = document.querySelector(".output") as HTMLDivElement;

window.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && userInput.value) {
    const currentTime = new Date().getTime() / (1000 * 60);
    const timeEntered = Date.parse(userInput.value) / (1000 * 60);
    output.textContent = numberWithCommas(
      (currentTime - timeEntered).toFixed()
    );
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
