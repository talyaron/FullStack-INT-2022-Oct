const topGrade = 
`
<ul class="header-grades-top-list">
<li class="header-grades-list__courseName">#</li>
<li class="header-grades-list__courseName">Course Name</li>
<li class="header-grades-list__courseName">Assignment Name</li>
<li class="header-grades-list__courseName">Score</li>
<li class="header-grades-list__courseName">Date</li>
<li class="header-grades-list__courseName">Edit/Delete</li>
</ul>

`
const grade = 
`
<div class="grade">
<ul class="header-grades-main-list">
    <li class="header-grades-list__courseName">01</li>
    <li class="header-grades-list__courseName">React</li>
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

function renderOptionsWithCourses(){
    
    fetch('/api/students/courses')
    .then((res) => {
        return res.json()
    })
    .then(data => {
  const result = data.courseNames.map(c=>{
    return c
  }).join('')
      renderAddGrade(result)
    })
    .catch((error) => {
        console.error(error);
    })}

function renderAddGrade(options:string):string{
    const addGrade = 
    `
    <div id="btnExit">
    <i class="fa-solid fa-xmark" onclick="handleClickCloseWindows()"></i>
    </div>
    <form class="app-container__main__form" id="rootForm" onsubmit="handleSubmitAddGrade(event)">
    <h3>ADD GRADE</h3>
    <select placeholder="Enter Course Name" name="courseName">
${options}
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