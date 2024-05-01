function runAfterSecs(fn: () => void) {
    setTimeout(fn, 5000);
}

runAfterSecs(() => {
    console.log("Ran after 5 secs");
})