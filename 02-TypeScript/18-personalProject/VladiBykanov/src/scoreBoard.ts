const users = localStorage.getItem("users") as string;
console.table(JSON.parse(users));
