// Entry Page elements
const signInForm = document.querySelector("#signInForm") as HTMLFormElement;
const signUpForm = document.querySelector("#signUpForm") as HTMLFormElement;
const entryPageMainContainer = document.querySelector(
  ".mainContainer"
) as HTMLDivElement;
const signUpPanelBtn = document.querySelector(
  "#signUpPanel"
) as HTMLButtonElement;
const signInPanelBtn = document.querySelector(
  "#signInPanel"
) as HTMLButtonElement;
const signInBtn = document.querySelector("#signInBtn") as HTMLButtonElement;
const userNameInput = document.querySelector(
  "#userNameInput"
) as HTMLInputElement;
const passwordInput = document.querySelector(
  "#passwordInput"
) as HTMLInputElement;

//------------------ Recovery page elements -----------------//
const recoveryForm = document.querySelector(".recoveryForm") as HTMLFormElement;
const passwordDisplayDiv = document.querySelector(
  ".passwordDisplay"
) as HTMLDivElement;
const recoveredPassword = document.querySelector(
  "#recoveredPassword"
) as HTMLSpanElement;

//------------------ Main page elements -----------------//
const profileWindow = document.querySelector(
  ".profileWindow"
) as HTMLDivElement;
const notifictionWindow = document.querySelector(
  ".notifictionWindow"
) as HTMLDivElement;
const profileDiv = document.querySelector(".profile") as HTMLDivElement;
const notificationsDiv = document.querySelector(
  ".notifications"
) as HTMLDivElement;
const newBoardWindow = document.querySelector(
  ".newBoardWindow"
) as HTMLDivElement;
const boardArea = document.querySelector(
  ".mainpageContainer__main__boards__boardArea"
) as HTMLDivElement;
const backgroundImageSelectionDiv = document.querySelector(
  ".backgroundSelectionDiv"
) as HTMLDivElement;
const imageDisplayedInCreate = document.querySelector(
  "#imageCreateWindow"
) as HTMLImageElement;

// Buttons
const createBoardWindowBtn = document.querySelector(
  ".createBoardWindowBtn"
) as HTMLButtonElement;
const createBoardBtn = document.querySelector(
  ".createBoardBtn"
) as HTMLButtonElement;
const cancelCreateBoardBtn = document.querySelector(
  ".cancelCreateBoardBtn"
) as HTMLButtonElement;
const boardImageBtn = document.querySelector(
  "#boardImageBtn"
) as HTMLButtonElement;

// Input
const newBoardName = document.querySelector("#boardName") as HTMLInputElement;
const newnBoardColor = document.querySelector(
  "#boardColor"
) as HTMLInputElement;
const searchBar = document.querySelector(".topNav__search") as HTMLInputElement;

//------------------Board page-----------------------//
const boardContainer = document.querySelector(
  ".boardContainer__main"
) as HTMLDivElement;
const boardTitle = document.querySelector(
  ".topNav__boardName"
) as HTMLDivElement;
let cards = document.querySelectorAll(
  ".boardContainer__main__list__card"
) as NodeListOf<HTMLDivElement>;
const editBoardWindow = document.querySelector(
  ".editBoardWindow"
) as HTMLDivElement;
const imageDisplayedInEdit = document.querySelector(
  "#imageEditWindow"
) as HTMLImageElement;
const trashCan = document.querySelector("#trash") as HTMLElement;
const trashCanDiv = document.querySelector(".trashDiv") as HTMLDivElement;
let noteBox = document.getElementById("notificationBox") as HTMLDivElement;
const editInfoBtns = document.querySelectorAll(".editInfo");

//Buttons
const addListBtn = document.querySelector("#addListBtn") as HTMLButtonElement;
const editBoardBtn = document.querySelector(
  ".editBoardBtn"
) as HTMLButtonElement;
const updatedBoardImageBtn = document.querySelector(
  "#updatedBoardImageBtn"
) as HTMLButtonElement;
// const editProfileInfo = document.querySelector(".editprofileBtn") as HTMLButtonElement;

// Input
const newListInput = document.querySelector(
  "#newListInput"
) as HTMLInputElement;
const nameInputEle = document.querySelector(
  "#updatedBoardName"
) as HTMLInputElement;
const colorInputEle = document.querySelector(
  "#updatedBoardColor"
) as HTMLInputElement;
const addNewCardInputs = document.querySelectorAll(".newCardTextArea");
