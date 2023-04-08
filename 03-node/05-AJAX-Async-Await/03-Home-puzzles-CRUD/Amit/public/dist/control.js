function handleGetStudents() {
    try {
        fetch("/api/get-students")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            try {
                if (!students)
                    throw new Error("didnt find students");
                renderStudents(students);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddStudent(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        if (!name)
            throw new Error("No name");
        var newStudent = { name: name };
        fetch("/api/add-student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudent)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddGrade(ev, uid) {
    try {
        console.log("uid", uid);
        ev.preventDefault();
        var test = ev.target.elements.test.value;
        var value = ev.target.elements.value.valueAsNumber;
        if (!uid)
            throw new Error("No uid in form");
        if (!test)
            throw new Error("No name in form");
        if (!value)
            throw new Error("No value in form");
        var newGrade = { test: test, value: value };
        console.log("newGrade", newGrade);
        fetch("/students/" + uid + "/grades", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newGrade)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("data", data);
        })["catch"](function (error) {
            console.error(error);
        });
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
// function handleSaveArticle(uid: string) {
//     try {
//         fetch("/api/articles")
//             .then((res) => res.json())
//             .then(({ articles }) => {
//                 try {
//                     if (!articles) throw new Error("articles not found");
//                     if (articles.length === 0) throw new Error("articles is empty");
//                     const article = articles.find(article => article.uid === uid);
//                     if (!article) throw new Error("article not found");
//                     const articleTitle: HTMLElement | null = document.querySelector(`#editTitle-${article.uid}`);
//                     const articleParagraph: HTMLElement | null = document.querySelector(`#editParagraph-${article.uid}`);
//                     if (!articleTitle) throw new Error("article title not found");
//                     if (!articleParagraph) throw new Error("article paragraph not found");
//                     articleTitle.contentEditable = "false";
//                     articleParagraph.contentEditable = "false";
//                     articleTitle.style.color = "black";
//                     articleParagraph.style.color = "black";
//                     article.title = articleTitle.innerText;
//                     article.paragraph = articleParagraph.innerText;
//                     fetch(`/api/articles/${uid}`, {
//                         method: "PATCH",
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify(article),
//                     })
//                         .then((res) => res.json())
//                         .then((data) => {
//                             console.log(data);
//                         })
//                         .catch((error) => {
//                             console.error(error);
//                         });
//                 } catch (error) {
//                     console.error(error);
//                 }
//             })
//     } catch (error) {
//         console.error(error);
//     }
// }
function handleDeleteStudent(_id) {
    try {
        fetch("/api/delete-student", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var students = _a.students;
            renderStudents(students);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
