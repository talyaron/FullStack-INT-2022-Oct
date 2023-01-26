"use strict";
let UsersListNumber = 1;
function renderUsers() {
    const table = document.querySelector('table');
    table.innerHTML =
        `
    <thead>
    <th>N</th>
    <th>Full-Name</th>
    <th>Address</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Password</th>
    <th>ID</th>
    </thead>
    `;
    users.forEach(users => {
        table.innerHTML += `    
    <tr>
    <td style="font-weight:bold">${UsersListNumber}</td>
    <td>${users.fullName}</td>
    <td>${users.address}</td>
    <td>${users.email}</td>
    <td>${users.phone}</td>
    <td>${users.password}</td>
    <td>${users.uID}</td>
    </tr>
    `;
        console.log("render");
        UsersListNumber++;
    });
}
