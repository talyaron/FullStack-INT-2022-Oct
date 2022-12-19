const output = document.querySelector(".output") as HTMLDivElement | null;
const loanAmount = document.querySelector("#amount") as HTMLInputElement | null;
const loanPeriod = document.querySelector("#period") as HTMLInputElement | null;
const loanPercentage = document.querySelector(
  "#percentage"
) as HTMLInputElement | null;

window.addEventListener("keydown", (e) => {
  e.defaultPrevented;

  if (e.key == "Enter") {
    console.log("It's working");
    if (
      loanAmount?.value == "" ||
      loanPeriod?.value == "" ||
      loanPeriod?.value == ""
    ) {
      output!.textContent = "Please provide full info";
    } else {
      const intAmount = parseInt(loanAmount!.value);
      const intPeriod = parseInt(loanPeriod!.value);
      const intPercentage = parseInt(loanPercentage!.value);
      const finalOutput = calculateLoan(intAmount, intPeriod, intPercentage);
      output!.textContent = 
        `The amount you will have to pay back when you loan ${intAmount}$ for ${intPeriod} years at ${intPercentage}% a year is: ${finalOutput}`;
        output?.style.fontSize = '2rem';
        output?.style.margin = '2rem';
    }
  }
});

function calculateLoan(amount, period, percentage) {
  return amount * (percentage / 100) * period + amount;
}
