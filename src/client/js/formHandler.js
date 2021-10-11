//this is required by jest to run
import 'regenerator-runtime/runtime'
//take user input, send it to server, receive API data from server, display it to the user
function handleSubmit(event) {
    event.preventDefault()

    // check if user's input is a URL
    let url = document.getElementById('url').value
    if (Client.checkURL(url) === false) {
        alert('form not submitted. Please try again!')
    }
    else {
        //show data from API to the user
        post('http://localhost:8081/apiURL', { url })
            .then(function (res) {
                document.getElementById('model').innerHTML = `Model: ${res.model}`
                document.getElementById('score_tag').innerHTML = `Polarity: ${res.score_tag}`
                document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
                document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
                document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
            })

    }

}

//asynchronous function responsible for dealing with the server
const post = async (url = '', data = {}) => {
    //send user input to the server in json format
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    //receive api data from the server
    try {
        const apiData = await response.json();
        return apiData;
    // the try/catch block is for error handling
    } catch (error) {
        console.log('Server fetch error: ', error)
    }
}

export { handleSubmit }