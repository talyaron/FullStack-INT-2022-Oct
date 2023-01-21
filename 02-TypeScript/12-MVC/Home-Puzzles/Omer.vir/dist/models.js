var Text1 = /** @class */ (function () {
    function Text1(text) {
        this.text = text;
        this.date = new Date();
    }
    Text1.prototype.getText = function () {
        return this.text;
    };
    Text1.prototype.getHour = function () {
        return this.date.getHours();
    };
    Text1.prototype.getMinutes = function () {
        return this.date.getMinutes();
    };
    return Text1;
}());
