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

function handleAddStudent(ev) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        if (!name) throw new Error("No name");

        const newStudent: any = { name };

        fetch("/api/add-student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });

        ev.target.reset();
    } catch (error) {
        console.error(error);
    }
}


function handleAddGrade(ev: any, uid: string){ 
    try {
        
        ev.preventDefault();

        const test = ev.target.elements.test.value;
        const value = ev.target.elements.value.valueAsNumber;
        if(!uid) throw new Error("No uid in form"); 
        if (!test) throw new Error("No name in form");
        if (!value) throw new Error("No value in form");


        const newGrade: any = { test, value };
        const _id: any = { uid }
        console.log(_id);
        

        fetch("/api/add-grade", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify( _id, newGrade)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("data" , data);
            })
            .catch((error) => {
                console.error(error);
            });

        ev.target.reset();
    } catch (error) {
        console.error(error);
    }
}