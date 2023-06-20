// import { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Comment from "../components/Comment";
// import axios from "axios";
// import "../style/bugsLife.scss";
// import { useParams } from "react-router-dom";
// import ProjectData from "../components/ProjectData";

// interface Project {
//   _id: string;
//   name: string;
//   src1: string;
//   src2: string;
//   src3: string;
//   src4: string;
// }

// const BugsLife = () => {
//   const [project, setProject] = useState<Project>();
//   const { _id } = useParams();
//   useEffect(() => {
//     const getProjectDetails = async () => {
//       try {
//         console.log(_id);
//         const response = await axios.get(
//           `/api/project/get-project-by-id?projectId=${_id}`
//         );
//         const { data } = response;
//         console.log(data);
//         setProject(data);
//       } catch (error: any) {
//         console.error(error);
//       }
//     };

//     getProjectDetails();
//   }, [_id]);

//   if (!project) {
//     return null;
//   }

//   return (
//     <>
//       <NavBar />
//       <ProjectData />
//       <Comment />
//     </>
//   );
// };

// export default BugsLife;
