var noa = {
    firstName: "Noa",
    familyName: "Meillet",
    fullName: function () {
        return (this.firstName + " " + this.familyName);
    }
};
console.log(noa.fullName());
