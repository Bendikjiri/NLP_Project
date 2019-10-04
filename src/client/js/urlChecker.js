function checkForUrl(inputText) {
    var regex = RegExp('^(http|https):\/\/');
    if (regex.test(inputText) == false) {
        alert('Please insert a valid article url');
        return false;
    } else {
        return true;
    }
}
export { checkForUrl }
