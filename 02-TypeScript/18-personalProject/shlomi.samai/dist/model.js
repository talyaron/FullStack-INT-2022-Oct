class User {
    constructor(name, nickName, description, pictureURL) {
        this.name = name;
        this.nickName = nickName;
        this.description = description;
        this.pictureURL = pictureURL;
        this.uid = uid();
    }
}
const users = [];
class Task {
    constructor(name, category, description, dueDate) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.dueDate = dueDate;
        this.uid = uid();
    }
}
const tasks = [];
