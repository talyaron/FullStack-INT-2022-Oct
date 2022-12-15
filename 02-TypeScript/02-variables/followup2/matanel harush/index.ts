function averageAge(person1: { age: number }, person2: { age: number }): number {
    return (person1.age + person2.age) / 2;
  }
  
  const form = document.querySelector('form');
  const person1AgeInput = document.getElementById('int-1st-person') as HTMLInputElement;
  const person2AgeInput = document.getElementById('int-2nd-person') as HTMLInputElement;
  const resultElement = document.getElementById('int-final-result');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const person1 = { age: Number(person1AgeInput.value) };
    const person2 = { age: Number(person2AgeInput.value) };
  
    resultElement.innerText = averageAge(person1, person2).toString();
  });