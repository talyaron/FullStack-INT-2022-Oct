function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

  
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
