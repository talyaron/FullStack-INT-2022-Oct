class Article {
    uuid: string
    constructor(
        public title: string,
        public des: string,
        public src: string,
    ) { }
}

let articles: Article[] = []
