function checkForUrl(string) {
    var regex = RegExp('^((http|https)?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
    if (regex.test(string) == true) {
        console.log('The url is valid.');
        return true;
        
    } else {
        alert('The url is not valid.');
        return false;
       
    }
}
export { checkForUrl }
