import { FC, useEffect, useState } from "react";
import axios from "axios";

//components
import SingleClassCard from "../../componenets/SingleClassCard/SingleClassCard";

//interfaces
import { IClass } from "./IClass";

//css & mui
import "./Classes.css";
import Grid from "@mui/material/Grid";

const Classes: FC = () => {
  const [classes, setClasses] = useState<IClass[]>([]);

  const deleteClass = (classId: number) => {
    setClasses(
      classes.filter((singleClass) => {
        return singleClass.classId !== classId;
      })
    );
  };

  useEffect(() => {
    try {
      axios.get("http://localhost:3000/classes/all").then(({ data }) => {
      setClasses(data);
    });
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <div className="classesWrapper">
      {classes.length > 0 && (
        <Grid columns={17} container spacing={3}>
          {classes.map((element, index) => (
            <Grid item xs={3} xl={2} key={index}>
              <SingleClassCard {...element} classGotDeleted={deleteClass} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Classes;
