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
organizations.push(new organization('latet', 'charity', 50));
organizations.push(new organization('yad sara', 'charity', 120));
organizations.push(new organization('yad vashem', 'charity', 78));
organizations.push(new organization('libi', 'charity', 45));
