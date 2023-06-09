class Counter {
  count: number;
  id:string = uid()
  constructor(count: number = 0) {
    this.count = count;
  }

  increment() {
    this.count++;
  }
}

const counter:Counter = new Counter();
console.log(counter)
