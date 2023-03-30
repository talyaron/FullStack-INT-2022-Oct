function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

class Article {
    public id:string;
    constructor(public header: string, public subject: string, public body: string) {
        this.id = uid();
    }

    copyconstructor(header:string, subject:string, body:string, id:string){
        this.body = body;
        this.header = header;
        this.id = id;
        this.subject = subject;
    }
}

