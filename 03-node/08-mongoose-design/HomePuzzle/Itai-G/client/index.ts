interface Student {
    name: string;
    courses: string[];
  }
  
  const addStudentForm = document.getElementById('add-student-form') as HTMLFormElement | null;
  if (addStudentForm) {
    addStudentForm.addEventListener('submit', handleAddStudent);
  }
  
  function handleAddStudent(event: Event) {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    const name = form.elements.namedItem('name')?.value;
  
    if (!name) {
      console.error('No name provided');
      return;
    }
  
    const newStudent = { name };
  
    fetch('/api/students/add-student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStudent)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add student');
      }
  
      console.log('Success:', response);
      alert('Student added successfully!');
      form.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to add student.');
    });
  }