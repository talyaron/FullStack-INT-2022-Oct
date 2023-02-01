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