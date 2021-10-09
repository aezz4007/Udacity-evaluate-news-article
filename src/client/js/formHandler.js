function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if (Client.checkURL(formText) === false) {
        alert('form not submitted. Please try again!')
    }
    else {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/test')
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML = res.message
            })

    }

}

export { handleSubmit }