"use strict";

//1. create a class of celebs
//with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.

class Celeb {
  name: string;
  genre: string;
  tiktokAccount?: string;
  instagramAccount: string;
  followers: number;

  constructor(
    name: string,
    genre: string,
    tiktokAccount: string,
    instagramAccount: string,
    followers: number
  ) {
    this.name = name;
    this.genre = genre;
    this.tiktokAccount = tiktokAccount;
    this.instagramAccount = instagramAccount;
    this.followers = followers;
  }

  //2:

  setFollowers(followers: number) {
    this.followers = followers;
  }

  getFollowers(): number | undefined {
    return this.followers;
  }
}

const noaKirel = new Celeb("Noa Kirel", "singer", "NoaK", "noakirel", 1300000);
const annazak = new Celeb("Anna Zak", "singer", "AnnaZ", "annazak", 900000);
const ninetTayeb = new Celeb("Ninet Tayeb", "singer", "", "ninettayeb", 600000);
const harelSkaat = new Celeb(
  "Harel Skaat",
  "singer",
  "HarelS",
  "harelskaat",
  400000
);

noaKirel.setFollowers(800);
console.log(noaKirel.getFollowers());
