


async function renderOptionsWithCourses(){
try {
    const res = await fetch('/courses/get-courses')
    const data = await res.json();
    if(!data) throw new Error("no found data")
    console.log('data',data);
     return data.courses.map(({name}) => name);
} catch (error) {
    console.error(error)
}    
}

async function GetCurCourses(CourseName:string){
    try {
        const res = await fetch('/courses/get-courses')
        const data = await res.json();
        if(!data) throw new Error("no found data")
        console.log('data',data);
         return data.courses.find(({name}) => name === CourseName );
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

 async function renderAddGrades(){
try {
    let addGrade = ''
    const options = await renderOptionsWithCourses();
    const optionsHtml:string = await options.map(name => `<option value="${name}">${name} </option>`).join('');
       if(!optionsHtml) {
        alert("no options . you must to  create course ")
       return addGrade = `
           <div id="btnExit">
           <i class="fa-solid fa-xmark" onclick="handleClickCloseWindows()"></i>
           </div>
           <h4>You Must To Create Course</h4>
           `
        
       } else {
      return  addGrade = 
           `
           <div id="btnExit">
           <i class="fa-solid fa-xmark" onclick="handleClickCloseWindows()"></i>
           </div>
           <form class="app-container__main__form" id="rootForm" onsubmit="handleSubmitAddGrade(event)">
           <h3>ADD GRADE</h3>
           <label for="_courseName" >Enter Course Name</label>
           <select id="_courseName" placeholder="Enter Course Name" name="courseName" id="rootSelectOptions">
           ${optionsHtml}
           </select>
           <input type="text" placeholder="Enter Assignment Name" name="assignmentName">
           <div>
           <input type="number" min="0" max="100" placeholder="Enter Score" name="score">
           <input type="date" name="date" >
           </div>
           <button type="submit">ADD</button>
           </form>
           `
       }
} catch (error) {
    console.error(error)
    return ' '
}
}

async function grades(){
    try {
        const rootGrade = document.getElementById('rootGrades')!
    const gradeDB = await fetch('/grades/get-grades');
    if(!gradeDB) throw new Error('no found Grades DB')
    const dataJson = await gradeDB.json();
     const  html:string = dataJson.grades.map((grade , index ) =>{
       return  `
            <div class="grade">
            <ul class="header-grades-main-list">
                <li class="header-grades-list__courseName">${index + 1}</li>
                <li class="header-grades-list__courseName">Orel Karako</li>
                <li class="header-grades-list__courseName">${grade.courseName.name}</li>
                <li class="header-grades-list__courseName">${grade.courseName.teacher.name}</li>
                <li class="header-grades-list__courseName">${grade.assignmentName}</li>
                <li class="header-grades-list__courseName">${grade.score}</li>
                <li class="header-grades-list__courseName">${grade.date}</li>
                <li class="header-grades-list__courseName buttonsEditRemove">
                    <i class="fa-solid fa-pen-to-square" onclick="${grade._id}"></i>
                    <i class="fa-solid fa-delete-left" onclick="${grade._id}"></i>
                </li>
            </ul>
            </div>
            `}).join('')

            rootGrade.innerHTML = html
    } catch (error) {
        console.error(error)
    }
    }
   
