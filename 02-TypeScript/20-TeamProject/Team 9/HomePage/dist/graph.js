var Rent = localStorage.getItem("totalRent");
var tRent = 0;
if (Rent) {
    tRent = parseInt(Rent);
}
var Grocories = localStorage.getItem("totalGrocories");
var tGrocories = 0;
if (Grocories) {
    tGrocories = parseInt(Grocories);
}
var Restaurants = localStorage.getItem("totalRestaurants");
var tRestaurants = 0;
if (Restaurants) {
    tRestaurants = parseInt(Restaurants);
}
var Entertainment = localStorage.getItem("totalEntertainment");
var tEntertainment = 0;
if (Entertainment) {
    tEntertainment = parseInt(Entertainment);
}
var Bills = localStorage.getItem("totalBills");
var tBills = 0;
if (Bills) {
    tBills = parseInt(Bills);
}
var General = localStorage.getItem("totalGeneral");
var tGeneral = 0;
if (General) {
    tGeneral = parseInt(General);
}
var data = [
    {
        data: [tRent, tGrocories, tRestaurants, tBills, tEntertainment, tGeneral],
        backgroundColor: [
            "#b70800",
            "#ffcd61",
            "#0049b0",
            "#ff5aa9",
            "#d2f048",
            "#4e7627",
        ],
        borderColor: "black"
    },
];
var options = {
    tooltips: {
        enabled: false
    },
    plugins: {
        datalabels: {
            formatter: function (value, ctx) {
                var datapoints = ctx.chart.data.datasets[0].data;
                var total = datapoints.reduce(function (total, datapoint) { return total + datapoint; }, 0);
                var percentage = (value / total) * 100;
                return percentage.toFixed(2) + "%";
            },
            color: "white"
        }
    }
};
var ctx = document.getElementById("pie-chart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: [
            "Rent",
            "Grocories",
            "Restaurants",
            "Bills",
            "Entertainment",
            "General",
        ],
        datasets: data
    },
    options: options,
    plugins: [ChartDataLabels]
});
