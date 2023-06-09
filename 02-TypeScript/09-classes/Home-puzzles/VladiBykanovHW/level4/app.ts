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
    this.day = parseInt(JSON.stringify(date).slice(9, 11));
  }

  dateFormat(): string | false {
    try {
      const dateToString = JSON.stringify(this.date)
        .replace(/[A-Z"]/g, " ")
        .trim()
        .split(" ");
      const properDateFormat = `${this.day}/${this.month}/${this.year}`;
      return `Date Entered: ${properDateFormat} at ${dateToString[1]}`;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  timePassed(): string | false {
    try {
      const theTimeOfUserInput = this.date.getTime();
      const currentTime = new Date().getTime();
      const timePassed = (currentTime - theTimeOfUserInput) / 1000;
      return `${timePassed} seconds passed since this date was created`;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

const aDate = new Date();
const newDate = new Dates(aDate);

console.log(aDate);
console.log(newDate);
console.log(newDate.hour);
console.log(newDate.minute);
console.log(newDate.seconds);
console.log(newDate.year);
console.log(newDate.month);
console.log(newDate.day);
console.log(newDate.timePassed());
console.log(newDate.dateFormat());

// created an app that will tell you how long have passed since your birth

const userInput = document.querySelector("#userInput") as HTMLInputElement;
const ulEl = document.querySelector(".appContainer__output") as HTMLDivElement;
const miliToSeconds: number = 1000;
const miliToMinutes: number = 1000 * 60;
const miliToHours: number = 1000 * 60 * 60;
const miliToDays: number = 1000 * 60 * 60 * 24;
const miliToWeeks: number = 1000 * 60 * 60 * 24 * 7;
const miliToYears: number = 1000 * 60 * 60 * 24 * 365;

window.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && userInput.value) {
    // const currentTime = new Date().getTime() / (1000 * 60);
    // const timeEntered = new Date(userInput.value);
    // console.log(timeEntered.getFullYear())
    timePassed(miliToSeconds, "Seconds");
    timePassed(miliToMinutes, "Minutes");
    timePassed(miliToHours, "Hours");
    timePassed(miliToDays, "Days");
    timePassed(miliToWeeks, "Weeks");
    timePassed(miliToYears, "Years");
  }
});

function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const timePassed = (convertRatio: number, timeName: string): void | false => {
  try {
    const currentTime: number = new Date().getTime() / convertRatio;
    const timeEntered: number = Date.parse(userInput.value) / convertRatio;
    const difference: number = currentTime - timeEntered;
    const li = document.createElement("li") as HTMLElement;
    li.textContent = `${timeName}: ${numberWithCommas(Math.floor(difference))}`;
    ulEl.append(li);
  } catch (error) {
    console.error(error);
    return false;
  }
};

// output.textContent = numberWithCommas((currentTime - timeEntered).toFixed());
