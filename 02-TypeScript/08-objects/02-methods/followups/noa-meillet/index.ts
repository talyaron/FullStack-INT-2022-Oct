interface Name{
    firstName: string;
    familyName: string;
    fullName: Function;
}

const noa:Name= {
    firstName: "Noa",
    familyName: "Meillet",
    fullName: function () {
        return (`${this.firstName} ${this.familyName}`);
    }
}

console.log(noa.fullName());