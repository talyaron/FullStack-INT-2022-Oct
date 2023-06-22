export function uid() {
  return Math.random().toString(34).slice(2);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

export default getRandomNumber;