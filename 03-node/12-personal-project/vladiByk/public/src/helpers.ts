const insertLeftOfLisk = (zone: HTMLElement, mouseX: number) => {
  try {
    const staticLists = zone.querySelectorAll(
      ".boardContainer__main__list:not(.isDragging)"
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
  } catch (error) {
    console.error(error);
  }
};

const insertAboveTask = (zone: HTMLElement, mouseY: number) => {
  try {
    const staticCards = zone.querySelectorAll(
      ".boardContainer__main__list__card:not(.isDragging)"
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
  } catch (error) {
    console.error(error);
  }
};

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

async function getUserBoards(userId: string) {
  try {
    return await fetch(`${boardsAPI}/${userId}`)
      .then((res) => res.json())
      .then(({ boards }) => boards)
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
}

async function removeCookie(api: string) {
  try {
    await fetch(`${api}/removeCookie`, {
      method: "DELETE",
    }).catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
}
