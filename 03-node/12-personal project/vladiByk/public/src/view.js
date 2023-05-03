"use strict";
const usersAPI = "/api/v1/users";
const boardsAPI = "/api/v1/boards";
const listsAPI = "/api/v1/lists";
// Entry Page elements
const signInForm = document.querySelector("#signInForm");
const signUpForm = document.querySelector("#signUpForm");
const entryPageMainContainer = document.querySelector(".mainContainer");
const signUpPanelBtn = document.querySelector("#signUpPanel");
const signInPanelBtn = document.querySelector("#signInPanel");
// const signInBtn = document.querySelector("#signInBtn") as HTMLButtonElement;
const userNameInput = document.querySelector("#userNameInput");
const passwordInput = document.querySelector("#passwordInput");
//------------------ Recovery page elements -----------------//
const recoveryForm = document.querySelector(".recoveryForm");
const passwordDisplayDiv = document.querySelector(".passwordDisplay");
const recoveredPassword = document.querySelector("#recoveredPassword");
//------------------ Main page elements -----------------//
const profileWindow = document.querySelector(".profileWindow");
const profileDiv = document.querySelector(".profile");
const newBoardWindow = document.querySelector(".newBoardWindow");
const boardArea = document.querySelector(".mainpageContainer__main__boards__boardArea");
const backgroundImageSelectionDiv = document.querySelector(".backgroundSelectionDiv");
const imageDisplayedInCreate = document.querySelector("#imageCreateWindow");
// Buttons
const createBoardWindowBtn = document.querySelector(".createBoardWindowBtn");
const createBoardBtn = document.querySelector(".createBoardBtn");
const cancelCreateBoardBtn = document.querySelector(".cancelCreateBoardBtn");
const boardImageBtn = document.querySelector("#boardImageBtn");
// Input
const newBoardName = document.querySelector("#boardName");
const newnBoardColor = document.querySelector("#boardColor");
const searchBar = document.querySelector(".topNav__search");
//------------------Board page-----------------------//
const boardContainer = document.querySelector(".boardContainer__main");
const boardTitle = document.querySelector(".topNav__boardName");
let cards = document.querySelectorAll(".boardContainer__main__list__card");
const editBoardWindow = document.querySelector(".editBoardWindow");
const imageDisplayedInEdit = document.querySelector("#imageEditWindow");
const trashCan = document.querySelector("#trash");
const trashCanDiv = document.querySelector(".boardContainer__main__trashDiv");
//Buttons
const addListBtn = document.querySelector("#addListBtn");
const editBoardBtn = document.querySelector(".editBoardBtn");
const updatedBoardImageBtn = document.querySelector("#updatedBoardImageBtn");
// Input
const newListInput = document.querySelector("#newListInput");
const nameInputEle = document.querySelector("#updatedBoardName");
const colorInputEle = document.querySelector("#updatedBoardColor");
const addNewCardInputs = document.querySelectorAll(".newCardTextArea");
