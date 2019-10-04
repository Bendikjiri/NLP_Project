function checkForUrl(inputText) {
    var regex = RegExp('^(http|https):\/\/');
    if (regex.test(inputText) == false) {
        alert('The url is not valid.');
        alert('Need to start with \"http(s)://\".')
        return false;
    } else {
        alert('The url is valid.');
        return true;
    }
}
export { checkForUrl }
