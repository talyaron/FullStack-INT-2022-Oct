<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Query MongoDB</title>
    <link rel="stylesheet" href="./dist/style.css">
    <script src="./dist/queryControle.js" defer></script>
    <script src="./dist/queryMongoDB.js" defer></script>
    <script src="./dist/student.js" defer></script>
    <script src="./dist/teacher.js" defer></script>
    <script src="./dist/course.js" defer></script>
    <script src="./dist/grades.js" defer></script>
    
</head>
<body
 onload="
handelTeacher(event)
handelStudent(event)
">
    
<h1>A Query MongoDB Table</h1>
<div class="search-wrapper">
  <label for="search">Find In Data</label>
  <input placeholder="Type a query:{ field: `value`}" type="search" id="search" data-search>
  <button class="btn" onclick="addMockTeacher()">Add-Mock-teacher</button>
  <button class="btn" onclick="addMockStudent()">Add-Mock-student</button>
</div>

<table id="customers">
  <tr>
    <th>Uid</th>
    <th>Name</th>
    <th>Last Name</th>
    <th>Course</th>
    <th>Grades</th>
  </tr>
</table>
<!-- <button>get</button>
<button>find</button> -->
</body>
</html>