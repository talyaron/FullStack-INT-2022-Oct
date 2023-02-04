var Donor = /** @class */ (function () {
    function Donor(Name, TotalIncomTax, LinkedOrganizationId, LinkedOrganizationPercentage, DonatedOrganizaions) {
        if (DonatedOrganizaions === void 0) { DonatedOrganizaions = []; }
        this.Name = Name;
        this.TotalIncomTax = TotalIncomTax;
        this.LinkedOrganizationId = LinkedOrganizationId;
        this.LinkedOrganizationPercentage = LinkedOrganizationPercentage;
        this.DonatedOrganizaions = DonatedOrganizaions;
        this.uid = 'D' + uid(12);
    }
    return Donor;
}());
var Donors = [];
var Organization = /** @class */ (function () {
    function Organization(Name, FieldOfActivity, AnnualBudget, MyDonors) {
        if (MyDonors === void 0) { MyDonors = []; }
        this.Name = Name;
        this.FieldOfActivity = FieldOfActivity;
        this.AnnualBudget = AnnualBudget;
        this.MyDonors = MyDonors;
        this.uid = 'O' + uid(12);
    }
    return Organization;
}());
var organizations = [];
organizations.push(new Organization('latet', 'charity', 50, [{ Id: 'shalom', Contribution: 100 }, { Id: 'alex', Contribution: 500 }]));
organizations.push(new Organization('yad sara', 'charity', 120));
organizations.push(new Organization('yad vashem', 'charity', 78));
organizations.push(new Organization('libi', 'charity', 45));
console.log(organizations);
