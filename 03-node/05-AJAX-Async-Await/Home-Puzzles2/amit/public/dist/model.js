var Article = /** @class */ (function () {
    function Article(title, paragraph, imageUrl, date) {
        this.title = title;
        this.paragraph = paragraph;
        this.imageUrl = imageUrl;
        this.date = date;
        this.uid = "" + uid();
    }
    return Article;
}());
