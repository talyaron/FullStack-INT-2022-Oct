"use strict";

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var _a, _b;

var storageData = getUsersFromStorage(); // LocalStorage DATA

var lastUserIn = getLastRegisterUser();
var usernameUser;
var emailUser;

var Albums =
/** @class */
function () {
  function Albums(name, photos) {
    this.name = name;
    this.photos = photos;
  }

  return Albums;
}();

var Users =
/** @class */
function () {
  function Users(email, password, username, gender, admin, albums) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.gender = gender;
    this.admin = admin;
    this.albums = albums;
  }

  return Users;
}();

var Photos =
/** @class */
function () {
  function Photos(photoName, date, src) {
    this.photoName = photoName;
    this.date = date;
    this.src = src;
    this.uId = uid();
    this.like = false;
  }

  return Photos;
}();

var users = (_a = getUsersFromStorage()) !== null && _a !== void 0 ? _a : []; // set The Album to Album Local Storage

var likedPhotos = [];
var albums = (_b = getAlbumFromStorage()) !== null && _b !== void 0 ? _b : [];
var animals = getAnimalsAlbum();
var backgrounds = getBackgroundAlbum(); //USERS LOCAL STORAGE

function getLastRegisterUser() {
  try {
    var usersDataJson = localStorage.getItem("users");
    if (!usersDataJson) throw new Error("no found localStorage users");
    var userData = JSON.parse(usersDataJson);
    var index = userData.length - 1;
    var lastRegister = storageData[index];
    return lastRegister;
  } catch (error) {
    console.error(error);
    return {};
  }
} //USERS LOCAL STORAGE


function updateUsersToLocalStorage() {
  try {
    if (!users) throw new Error("not find Users in local storage");
    localStorage.setItem("users", JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
}

function getUsersFromStorage() {
  try {
    var dataJson = localStorage.getItem("users");
    if (!dataJson) throw new Error("not find users in local storage");
    var data = JSON.parse(dataJson);
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
} //PHOTOS LOCAL STORAGE


function updatePhotosToLocalStorage() {
  try {
    if (!albums) throw new Error("not find albums in local storage");
    localStorage.setItem("albums", JSON.stringify(albums));
  } catch (error) {
    console.log(error);
  }
}

function getAlbumFromStorage() {
  try {
    var dataJson = localStorage.getItem("albums");
    if (!dataJson) throw new Error("not find albums in local storage");
    var data = JSON.parse(dataJson);
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
} //IF THE USER LOGIN SUCCESS


function ifRefresh() {
  try {
    localStorage.setItem("userLogIn", "true");
  } catch (error) {
    console.log(error);
  }
} //ANIMAL LOCAL STORAGE


function getAnimalsAlbum() {
  var animalsData = [{
    uId: "01010101",
    photoName: "animal2",
    date: "1234",
    src: "https://a-z-animals.com/media/tiger_laying_hero_background.jpg",
    like: false
  }, {
    uId: "01010101",
    photoName: "animal3",
    date: "1234",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkwHi7EWXOBxgW_zLsTQ2ZU_qqxaxRswZkiYVxBgjndCCcFF6rwP1F6NZu8zqC1XGAMc&usqp=CAU",
    like: false
  }, {
    uId: "01010101",
    photoName: "animal4",
    date: "1234",
    src: "https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg",
    like: false
  }, {
    uId: "01010101",
    photoName: "animal5",
    date: "1234",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0ZpNjOZUiorOad2OK0q9Dw2_hPakrXMLdQ&usqp=CAU",
    like: false
  }];
  var animalsAlbum = localStorage.getItem('animals');

  if (!animalsAlbum) {
    localStorage.setItem('animals', JSON.stringify(animalsData));
  } else {
    animalsData = JSON.parse(animalsAlbum);
  }

  return animalsData;
}

function saveAnimalsToStorage() {
  localStorage.setItem('animals', JSON.stringify(animals));
} //BACKGROUNDS LOCAL STORAGE


function getBackgroundAlbum() {
  var backgroundsData = [{
    uId: "01010101",
    photoName: "background1",
    date: "1234",
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    like: false
  }, {
    uId: "01010101",
    photoName: "background3",
    date: "1234",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEYSRMBGU80tU-7ycVzMZSIsau-nELR_B_y3sFsRmp7xq4BsL92fjUlR1oK63hlDm98A&usqp=CAU",
    like: false
  }, {
    uId: "01010101",
    photoName: "background3",
    date: "",
    src: "https://media.istockphoto.com/id/1353553203/photo/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-forest-trees-background.jpg?b=1&s=170667a&w=0&k=20&c=-jvR1WDwcloLXRgRTGeyG3frvrhPIbegdemeL6vY2Pk=",
    like: false
  }, {
    uId: "01010101",
    photoName: "background4",
    date: "",
    src: "https://i.pinimg.com/736x/90/36/9f/90369ff207a44eb772af864db67e1cb4.jpg",
    like: false
  }, {
    uId: "01010101",
    photoName: "background5",
    date: "",
    src: "https://m.media-amazon.com/images/I/31qu4ixHZ3L._SY355_.jpg",
    like: false
  }];
  var backgroundsAlbum = localStorage.getItem('backgrounds');

  if (!backgroundsAlbum) {
    localStorage.setItem('backgrounds', JSON.stringify(backgroundsData));
  } else {
    backgroundsData = JSON.parse(backgroundsAlbum);
  }

  return backgroundsData;
}

function saveBackgroundToStorage() {
  localStorage.setItem('backgrounds', JSON.stringify(backgrounds));
} // ARR LIKED PHOTOS


function getLikesPhotos() {
  var filterLike = function filterLike(photo) {
    return photo.like;
  };

  var filteredAlbums = albums.reduce(function (photos, currAlbum) {
    var filterPhotos = currAlbum.photos.filter(filterLike);
    photos = __spreadArrays(photos, filterPhotos);
    return photos;
  }, []);
  return __spreadArrays(animals.filter(filterLike), backgrounds.filter(filterLike), filteredAlbums);
}