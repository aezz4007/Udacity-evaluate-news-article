// const cors = require('cors')
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('url').value
    if (Client.checkURL(url) === false) {
        alert('form not submitted. Please try again!')
    }
    else {
        console.log("::: Form Submitted :::", { url })
        post('http://localhost:8081/apiURL', {url})
            .then(function(res) {
                document.getElementById('model').innerHTML = `Model: ${res.model}`
                document.getElementById('score_tag').innerHTML = `Polarity: ${res.score_tag}`
                document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
                document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
                document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
            })

    }

}

const post = async (url = '', data = {}) => {
    console.log('data', data)
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log('data2', data)
    try {
        const apiData = await response.json();
        console.log('Data received:', apiData)
        return apiData;

    } catch (error) {
        console.log('Server fetch error: ', error)
    }
}

export { handleSubmit }