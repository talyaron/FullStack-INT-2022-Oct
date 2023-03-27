"use strict";

var Article =
/** @class */
function () {
  function Article(title, des, src) {
    this.title = title;
    this.des = des;
    this.src = src;
  }

  return Article;
}();

var soundONload = new Audio().src = '../sound/newsOnload.mp3';
soundONload.play();
var articles = [];