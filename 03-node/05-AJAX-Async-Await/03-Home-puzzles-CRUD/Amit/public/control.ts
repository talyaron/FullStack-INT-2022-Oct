function handleGetStudents() {
    try {
      fetch("/api/get-students")
        .then((res) => res.json())
        .then(({ students }) => {
          try {
            if (!students) throw new Error("didnt find students");
            
            renderStudents(students);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
}


