


function renderOptionsWithCourses(){
try {
    fetch('/api/students/courses')
    .then((res) => {
        return res.json()
    })
    .then(data => {
        
  const result = data.courseNames.map(c=>{
    return c
  }).join('')
      renderAddGrade(result)
      console.log(renderAddGrade(result));
    })
    .catch((error) => {
        console.error(error);
    })
} catch (error) {
    console.error(error)
}    
}

function renderAddCourse(){
    const addCourse = 
    `
    <div id="btnExit">
    <i class="fa-solid fa-xmark" onclick="handleClickCloseWindows()"></i>
    </div>
    <form class="app-container__main__form" id="rootForm" onsubmit="handleSubmitAddCourse(event)">
    <h3>ADD New Course</h3>
    <input type="text" placeholder="Enter Course Name" name="CourseName">
 
    <input type="text"  placeholder="Enter Teacher Course" name="teacherCourse">
 
    <button type="submit">ADD</button>
    </form>
    `
    return addCourse
}

function renderAddGrade():string{
    const addGrade = 
    `
    <div id="btnExit">
    <i class="fa-solid fa-xmark" onclick="handleClickCloseWindows()"></i>
    </div>
    <form class="app-container__main__form" id="rootForm" onsubmit="handleSubmitAddGrade(event)">
    <h3>ADD GRADE</h3>
    <select placeholder="Enter Course Name" name="courseName" id="rootSelectOptions">

    </select>
    <input type="text" placeholder="Enter Assignment Name" name="assignmentName">
    <div>
    <input type="number" min="0" max="100" placeholder="Enter Score" name="score">
    <input type="date" name="date" >
    </div>
    <button type="submit">ADD</button>
    </form>
    `
    return addGrade
}

function renderAllGrade():string{
const topGrade = 
`
<ul class="header-grades-top-list">
<li class="header-grades-list__courseName">#</li>
<li class="header-grades-list__courseName">Student Name</li>
<li class="header-grades-list__courseName">Course Name</li>
<li class="header-grades-list__courseName">Teacher Name</li>
<li class="header-grades-list__courseName">Assignment Name</li>
<li class="header-grades-list__courseName">Score</li>
<li class="header-grades-list__courseName">Date</li>
<li class="header-grades-list__courseName">Edit/Delete</li>
</ul>

`
const oneGrade = 
`
<div class="grade">
<ul class="header-grades-main-list">
    <li class="header-grades-list__courseName">01</li>
    <li class="header-grades-list__courseName">Orel Karako</li>
    <li class="header-grades-list__courseName">React</li>
    <li class="header-grades-list__courseName">Tal Madrid</li>
    <li class="header-grades-list__courseName">AppList</li>
    <li class="header-grades-list__courseName">98</li>
    <li class="header-grades-list__courseName">25/11/2022</li>
    <li class="header-grades-list__courseName">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-delete-left"></i>
    </li>
</ul>
</div>

`
const footerGrade = 
`
<ul class="header-grades-footer-list">
<h3>your average :
    <span>80</span>
</h3>
</ul>
`
    const allGrade = topGrade+oneGrade+footerGrade

    return allGrade
}