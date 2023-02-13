
class Task {
  constructor(
    public title: string,
    public description: string,
    public dueTime: string,
    public username: string,
    public completed = false
  ) {}
}

const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") ?? "[]");

class User {
  public username: string;
  public password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}


const users: User[] = JSON.parse(localStorage.getItem("users") ?? "[]");

