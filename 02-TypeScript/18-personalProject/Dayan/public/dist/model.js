//-----Class User-----//
var User = /** @class */ (function () {
    function User(name, username, email, phone, password, gender) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.gender = gender;
    }
    return User;
}());
var users = [];
//-----Class Video Library-----//
var Video = /** @class */ (function () {
    function Video(title, url, id) {
        this.title = title;
        this.url = url;
        this.id = id;
    }
    return Video;
}());
var videoLibrary = [
    {
        title: "Full Body Yoga for Strength & Flexibility | 25 Minute At Home Mobility Routine",
        url: "https://www.youtube.com/watch?v=Eml2xnoLpYE&t=1s",
        id: "video_1"
    },
    {
        title: "15 Minute Yoga Stretch Break | Open Your Body & Feel Amazing!",
        url: "https://www.youtube.com/watch?v=xfhfltT2Keo&t=1s",
        id: "video_2"
    },
    {
        title: "Yoga To Ease Into The Day | Full Body - 20 Minute Morning Yoga Flow",
        url: "https://www.youtube.com/watch?v=-l2rrLp9ePk",
        id: "video_3"
    },
    {
        title: "15 MIN MORNING YOGA FLOW || Wake Up & Feel Energised",
        url: "https://www.youtube.com/watch?v=Vr3h5X9kmUo",
        id: "video_4"
    },
    {
        title: "30-Minute Energizing Power Vinyasa Flow with Briohny Smyth",
        url: "https://www.youtube.com/watch?v=A4ViwsLKoSY",
        id: "video_5"
    },
    {
        title: "10 MIN YOGA FLOW - for Full Body Strength & Flowy Stretching",
        url: "https://www.youtube.com/watch?v=_XBVI0HeegQ",
        id: "video_6"
    },
];
