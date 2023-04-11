var addStudentForm = document.getElementById('add-student-form');
if (addStudentForm) {
    addStudentForm.addEventListener('submit', handleAddStudent);
}
function handleAddStudent(event) {
    var _a;
    event.preventDefault();
    var form = event.target;
    var name = (_a = form.elements.namedItem('name')) === null || _a === void 0 ? void 0 : _a.value;
    if (!name) {
        console.error('No name provided');
        return;
    }
    var newStudent = { name: name };
    fetch('/api/students/add-student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudent)
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error('Failed to add student');
        }
        console.log('Success:', response);
        alert('Student added successfully!');
        form.reset();
    })["catch"](function (error) {
        console.error('Error:', error);
        alert('Failed to add student.');
    });
}
