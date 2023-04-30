"use strict";
// import {Collection} from "../../../../API/collection/collectionsModel";
exports.__esModule = true;
exports.handleGetCollections = exports.renderCollection = void 0;
function renderCollection(collections) {
    try {
        var html = "\n      <div class=\"tour-row\">\n      <button class=\"tour-item tour-date\"><img src=\"" + collections.src + "\"></button>\n      <span class=\"tour-item tour-price\">" + collections.price + "</span>\n      <span class=\"tour-item tour-name\">" + collections.name + "</span>\n      <span class=\"tour-item tour-descriptions\">" + collections.descriptions + "</span>\n      <button type=\"button\" class=\"tour-item tour-btn btn btn-primary\">Add to Favourites</button>\n  </div>\n";
        var itemsRoot = document.querySelector("#items");
        if (!itemsRoot)
            throw new Error("itemsRoot not found");
        itemsRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
exports.renderCollection = renderCollection;
function handleGetCollections() {
    try {
        fetch("/api/collections/get-collections")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var collections = _a.collections;
            // if (!collections) throw new Error("didnt find collections");
            renderCollection(collections);
        });
    }
    catch (error) {
        console.error(error);
    }
}
exports.handleGetCollections = handleGetCollections;
