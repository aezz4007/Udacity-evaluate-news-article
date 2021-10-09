var validUrl = require('valid-url');

function checkURL(inputText) {
    console.log("::: Running checkURL :::", inputText);
  
    if (validUrl.isUri(inputText)){
        console.log('Looks like a URL');
    } else {
        alert('Not a URL');
        return false;
    }
    
}

export { checkURL }