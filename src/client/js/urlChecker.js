//a ready-made module for url check
var validUrl = require('valid-url');

function checkURL(inputText) {

    if (validUrl.isUri(inputText)) {
        return true
    } else {
        alert('Not a URL');
        return false;
    }

}

export { checkURL }