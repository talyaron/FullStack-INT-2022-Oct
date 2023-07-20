"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const insertLeftOfLisk = (zone, mouseX) => {
    try {
        const staticLists = zone.querySelectorAll(".boardContainer__main__list:not(.isDragging)");
        let closestTask = null;
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
    }
    catch (error) {
        console.error(error);
    }
};
const insertAboveTask = (zone, mouseY) => {
    try {
        const staticCards = zone.querySelectorAll(".boardContainer__main__list__card:not(.isDragging)");
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
    }
    catch (error) {
        console.error(error);
    }
};
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
function getUserBoards(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield fetch(`${boardsAPI}/${userId}`)
                .then((res) => res.json())
                .then(({ boards }) => boards)
                .catch((error) => console.error(error));
        }
        catch (error) {
            console.error(error);
        }
    });
}
function removeCookie(api) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch(`${api}/removeCookie`, {
                method: "DELETE",
            }).catch((error) => console.error(error));
        }
        catch (error) {
            console.error(error);
        }
    });
}
function createNotification(message, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`${notificationsAPI}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message, userId }),
        });
    });
}
