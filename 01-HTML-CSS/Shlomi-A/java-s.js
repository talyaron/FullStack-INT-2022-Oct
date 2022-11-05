const btn = document.querySelector("#btn");
const radioButtons = document.querySelectorAll('input[name="בחירות"]');
btn.addEventListener("click", () => {
  let party;
  let mandates;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      party = radioButton.className;
      mandates = radioButton.value;
      break;
    }
  }
  output.innerText = party ? `מפלגת ${party} עם ${mandates} מנדטים` : " ";
});
