var Donor = /** @class */ (function () {
    function Donor(name, totalIncomTax, linkedOrganizationId) {
        this.name = name;
        this.totalIncomTax = totalIncomTax;
        this.linkedOrganizationId = linkedOrganizationId;
        this.uid = uid();
    }
    return Donor;
}());
var Donors = [];
var organization = /** @class */ (function () {
    function organization(name, fieldOfActivity, annualBudget) {
        this.name = name;
        this.fieldOfActivity = fieldOfActivity;
        this.annualBudget = annualBudget;
        this.uid = uid();
    }
    return organization;
}());
var organizations = [];
