"use strict";
// Create Uniq ID
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
