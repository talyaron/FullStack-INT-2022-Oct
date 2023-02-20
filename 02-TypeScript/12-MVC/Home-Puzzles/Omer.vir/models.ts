class Text1 {
    private text:string;
    private date:Date;

    constructor(text:string) {
        this.text = text;
        this.date = new Date();
    }

    getText() {
        return this.text;
    }

    getHour() {
        return this.date.getHours();
    }

    getMinutes() {
        return this.date.getMinutes();
    }
}