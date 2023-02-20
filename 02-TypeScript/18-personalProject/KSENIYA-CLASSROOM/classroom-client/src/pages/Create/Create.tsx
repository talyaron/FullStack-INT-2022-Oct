import { FC } from "react";

//componenets
import GenericFeild from "../../componenets/GenericFeild.tsx/GenericFeild";

//consts
import { CREATE_CLASS_HEADERS } from "../../consts/createClass";
import { CREATE_STUDENT_HEADERS } from "../../consts/createStudent";

//css & mui
import './create.css'

const Create: FC = () => {
  return (
    <div className="formsWrapper">
      <GenericFeild
        formTitle={"Create new class"}
        formFeilds={CREATE_CLASS_HEADERS}
        buttonTitle={"CREATE CLASSS"}
      />

      <GenericFeild
        formTitle={"Add new student"}
        formFeilds={CREATE_STUDENT_HEADERS}
        buttonTitle={"ADD STUDENT"}
      />
    </div>
  );
};

export default Create;
