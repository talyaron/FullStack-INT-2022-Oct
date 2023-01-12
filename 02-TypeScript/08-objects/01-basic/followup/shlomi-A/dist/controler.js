var userObject = {
    userId: 331464621,
    userName: 'shlomi',
    age: 24
};
var userObjectKeys = Object.keys(userObject);
// ["userId", "userName", "age"]
userObjectKeys.forEach(function (key) {
    console.log("key: " + key + ", value: " + userObject[key]);
});
for (var i in userObject) {
    console.log("key: " + i + ", value: " + userObject[i]);
}
