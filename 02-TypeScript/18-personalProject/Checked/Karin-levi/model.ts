class Video {
    uid: string;

    constructor(
        public link: string,
        public name: string,
        public views: string,
        public likes: string,
        public reviews: Review[]
    ) {
        this.uid = uid();
    }

}

class User {
    constructor(
        public name: string,
        public img: string,
    ) { }
}

class Review {
    constructor(
        public user: User,
        public review: string
    ) { }
}

