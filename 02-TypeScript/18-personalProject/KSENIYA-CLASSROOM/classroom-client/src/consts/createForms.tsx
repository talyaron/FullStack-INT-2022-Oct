export {};
interface IGenericForm {
  feildName: string;
  isRequired: boolean;
  validationFuncs?: string[]
}

export const createClass: IGenericForm[] = [
  {
    feildName: "Class ID",
    isRequired: true,
  },
  {
    feildName: "Name",
    isRequired: true,
  },
  {
    feildName: "Max Seats",
    isRequired: true,
  },
];

export const addNewStudent: IGenericForm[] = [
  {
    feildName: "ID",
    isRequired: true,
  },
  {
    feildName: "First Name",
    isRequired: true,
  },
  {
    feildName: "Last Name",
    isRequired: true,
  },
  {
    feildName: "Age",
    isRequired: false,
  },
  {
    feildName: "Proffesion",
    isRequired: true,
  },
];
