interface DonatedOrganizaion {
    Id: string;
    Percentage : number;
}


class Donor {
    uid:string;

    constructor(
        public Name: string,
        public TotalIncomTax: number,
        public LinkedOrganizationId: string,
        public LinkedOrganizationPercentage: number,
        public DonatedOrganizaions :DonatedOrganizaion[] =[],
    ) {
        this.uid = 'D'+uid(12);
    }
}
const Donors: Donor[]=[];

interface MyDonor {
    Id:string;
    Contribution: number
}
class Organization {
    uid:string;
    constructor(
        public Name :string,
        public FieldOfActivity: string,
        public AnnualBudget: number,
        public MyDonors:MyDonor[]=[],
    ) {
        this.uid = 'O'+uid(12);
    }
}

const organizations: Organization[]=[];

organizations.push(new Organization('latet','charity',50,[{ Id:'shalom', Contribution: 100},{Id:'alex',Contribution:500}]));
organizations.push(new Organization('yad sara','charity',120));
organizations.push(new Organization('yad vashem','charity',78));
organizations.push(new Organization('libi','charity',45));
console.log(organizations)