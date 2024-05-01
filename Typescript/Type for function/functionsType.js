"use strict";
function runAfterSecs(fn) {
    setTimeout(fn, 5000);
}
runAfterSecs(() => {
    console.log("Ran after 5 secs");
});
