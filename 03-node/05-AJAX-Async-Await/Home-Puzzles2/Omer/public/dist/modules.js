function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
var Article = /** @class */ (function () {
    function Article(header, subject, body) {
        this.header = header;
        this.subject = subject;
        this.body = body;
        this.id = uid();
    }
    Article.prototype.copyconstructor = function (header, subject, body, id) {
        this.body = body;
        this.header = header;
        this.id = id;
        this.subject = subject;
    };
    return Article;
}());
