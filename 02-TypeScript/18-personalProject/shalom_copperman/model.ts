class Donor {
    uid:string;

    constructor(
        public name: string,
        public totalIncomTax: number,
        public linkedOrganizationId: string,
    ) {
        this.uid = uid();
    }
}
const Donors: Donor[]=[];

class organization {
    uid:string;
    constructor(
        public name :string,
        public fieldOfActivity: string,
        public annualBudget: number,
    ) {
        this.uid = uid();
    }
}
const organizations: organization[]=[];
organizations.push(new organization('latet','charity',50));
organizations.push(new organization('yad sara','charity',120));
organizations.push(new organization('yad vashem','charity',78));
organizations.push(new organization('libi','charity',45));