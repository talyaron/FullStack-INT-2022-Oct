function renderCoursesPage(e) {
    e.preventDefault()

    try {
        const teacherUsername = e.target.elements.teacherUsername.value;
        console.log(teacherUsername)
    } catch (error) {
        console.log(error)
    }
}