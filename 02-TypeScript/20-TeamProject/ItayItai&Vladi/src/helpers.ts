const insertLeftOfLisk = (zone: HTMLElement, mouseX: number) => {
  const staticLists = zone.querySelectorAll(
    ".boardContainer__main__list:not(.is-dragging)"
  );

  let closestTask: null | Element = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  staticLists.forEach((list) => {
    const cardBoundaries = list.getBoundingClientRect();

    const offset = mouseX - cardBoundaries.left - cardBoundaries.width / 2;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = list;
    }
  });

  return closestTask;
};

const insertAboveTask = (zone, mouseY) => {
  const staticCards = zone.querySelectorAll(
    ".boardContainer__main__list__card:not(.is-dragging)"
  );

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  staticCards.forEach((card) => {
    const cardBoundaries = card.getBoundingClientRect();

    const offset = mouseY - cardBoundaries.top - cardBoundaries.height / 2;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = card;
    }
  });

  return closestTask;
};

function userListFromStorage() {
  const getLocalStorage = localStorage.getItem("signedUpUsers");
  if (getLocalStorage) {
    const userList: User[] = JSON.parse(getLocalStorage);
    return userList;
  }
  return [];
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function checkIfEmailExists(email: string) {
  const userList = userListFromStorage();
  const findEmail = userList.find((user) => user.email === email);
  if (findEmail) return true;
  return false;
}

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
