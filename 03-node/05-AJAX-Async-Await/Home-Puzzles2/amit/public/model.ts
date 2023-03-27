class Article{
    uid: string;
    constructor(
        public title: string,
        public paragraph: string,
        public imageUrl: string,
        public date?: string,
    ){
        this.uid = `${uid()}`
    }
}
