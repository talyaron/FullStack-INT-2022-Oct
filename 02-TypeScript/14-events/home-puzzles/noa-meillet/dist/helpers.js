function noBlankBoxes() {
    try {
        if (!box1_1 ||
            !box1_2 ||
            !box1_3 ||
            !box2_1 ||
            !box2_2 ||
            !box2_3 ||
            !box3_1 ||
            !box3_2 ||
            !box3_3)
            throw new Error("Error");
        if (box1_1.style.backgroundColor != "white" &&
            box1_2.style.backgroundColor != "white" &&
            box1_3.style.backgroundColor != "white" &&
            box2_1.style.backgroundColor != "white" &&
            box2_2.style.backgroundColor != "white" &&
            box2_3.style.backgroundColor != "white" &&
            box3_1.style.backgroundColor != "white" &&
            box3_2.style.backgroundColor != "white" &&
            box3_3.style.backgroundColor != "white")
            return true;
        else
            return false;
    }
    catch (error) {
        console.error(error);
    }
}
function reset() {
    window.location.reload();
}
