var expenses = [
    {
        name: "Rent",
        category: EXPENSES_CATEGORIES.Rent,
        sum: 1000
    },
    {
        name: "Market",
        category: EXPENSES_CATEGORIES.Grocories,
        sum: 67
    },
    {
        name: "H&M",
        category: EXPENSES_CATEGORIES.Clothing,
        sum: 98
    },
];
var incomes = [
    {
        name: "pay",
        category: INCOME_CATEGORIES.Salary,
        sum: 1000
    },
    {
        name: "dfbdf",
        category: INCOME_CATEGORIES.Bonus,
        sum: 2000
    },
    {
        name: "dssdvsd",
        category: INCOME_CATEGORIES.General,
        sum: 98
    },
];
var currentlyDisplayed = "INCOME";
var toggleOptions = function (newOption) {
    currentlyDisplayed = newOption;
    render();
};
var render = function () {
    var currArr = currentlyDisplayed === "INCOME" ? incomes : expenses;
    var wrapper = document.getElementById("expensesWrapper");
    var elements = "";
    var currSum = 0;
    currArr.forEach(function (element) {
        currSum += element.sum;
        elements += "<div class=\"singleExpenseWrapper\">\n    <div class=\"singleExpense\">\n      <div>name: " + element.name + "</div>\n      <div>amount: " + element.sum + "</div>\n    </div>\n    <div>category: " + element.category + "</div>\n  </div>";
    });
    if (wrapper)
        wrapper.innerHTML = " <div class=\"expensesTitle\">\n  Total expenses are: " + currSum + "$\n</div>";
    if (wrapper)
        wrapper.innerHTML += elements;
};
render();
