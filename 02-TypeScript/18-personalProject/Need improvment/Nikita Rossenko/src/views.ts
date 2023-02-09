const allUsersString = localStorage.getItem('allUsers');
const isLoggedInString:string | null = localStorage.getItem('isLoggedIn');
let isLoggedIn:boolean = false;
let loggedInUser = '';

if(isLoggedInString){
    const isLoggedInObject = JSON.parse(isLoggedInString);
    isLoggedIn = isLoggedInObject['isLoggedIn'];
    loggedInUser = isLoggedInObject['username']
} else {
    isLoggedIn = false
}