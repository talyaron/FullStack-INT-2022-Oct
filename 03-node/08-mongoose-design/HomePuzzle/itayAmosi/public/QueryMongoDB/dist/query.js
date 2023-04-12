function addMockCourse() {
    fetch("/api/courses/add-mock-course", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
}
