function renderNavBar(){

    const html = `<ul class="navUl">
    <li id="1">לוח עבודה</li>
    <li id="2">הסבר</li>
    <li id="3">הוסף תלמיד</li>
    <li id="4">הוסף מקצוע</li>
    <li id="5">הוסף ציון</li>
    <li id="6">הוספת מורה</li>
    </ul>`
    const newdiv = document.createElement("div")as HTMLDivElement
    const navbar = document.querySelector(".navbar")as HTMLDivElement
    newdiv.innerHTML = html
    navbar.appendChild(newdiv)
    renderListNavBar()
    }

    function htmlLogBorad(){
     const main = document.querySelector(".main")as HTMLDivElement
       const  html = `<h1>borad</h1>` 
       main.innerHTML = html
    }
    
    function htmlExplain(){
     const main = document.querySelector(".main")as HTMLDivElement
       const  html = `<h2> 
       מורה יקר!!!
       עידכון , מאפשרת לך לשמור מידע אודות התלמידים , ציוניהם והמקצועות אותם הם לומדים.
       פשוט הוסף תלמיד בחר ציון ומקצוע ומורה מלמד, שים לב בכל שלב ניתן לעדכון נתונים</h2>` 
       main.innerHTML = html
    }

    function htmlAddStudent(){
        const main = document.querySelector(".main")as HTMLDivElement
        const html = ` <form action="post" class="addStudentForm">
        <h2 class="addStudentForm__h2f">הוסף סטודנט חדש</h2>
        <input type="text" required placeholder="שם" class="addStudentForm__inp">
        <br>
        <input type="text" required placeholder="משפחה" class="addStudentForm__inp">
        <br>
        <input type="tel" required placeholder="טלפון" class="addStudentForm__inp">
        <br>
        <input type="email" required placeholder="מייל" class="addStudentForm__inp">
        <br>
        <button type="submit" class="addStudentForm__btn">הוסף</button>
    </form>`
        main.innerHTML = html
    }

    function htmlAddPro(){
        const main = document.querySelector(".main")as HTMLDivElement
        const html = `<form class="addStudentForm" >
        <h2 class="addStudentForm__h2f">הוסף מקצוע</h2>
        <input type="text" required placeholder="שם התלמיד" class="addStudentForm__inp">    
        <br>
        <input type="text" required placeholder="שם המקצוע" class="addStudentForm__inp">
        <br>
        <button type="submit" class="addStudentForm__btn">הוסף</button>
        </form>`

        main.innerHTML = html
    }

      function htmlAddGrade(){
        const main = document.querySelector(".main")as HTMLDivElement
        const html = `<form class="addStudentForm">
        <h2 class="addStudentForm__h2f">הוסף ציון</h2>
        <input type="text" required placeholder="שם התלמיד" class="addStudentForm__inp">    
        <br>
        <input type="text" required placeholder="ציון" class="addStudentForm__inp">
        <br>
        <button type="submit" class="addStudentForm__btn">הוסף</button>
        </form>`
        main.innerHTML = html

      }

      function htmlAddTeacher(){

      }