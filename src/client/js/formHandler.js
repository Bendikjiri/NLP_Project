function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    let name = document.getElementById('name').value
    if (client.checkForUrl(formText)) {
        const postUrl = async (url = '', data = {}) => {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            try {
                const newData = await response.json();
                document.getElementById('results').innerHTML = `<div>Hi ${name}, this is your results\:</div><div>label: ${newData.label}</div><div>code: ${newData.code}</div><div>confidence: ${newData.confidence}</div>`
                return newData
            } catch (error) {
                console.log("error", error);
            }
        };

<<<<<<< HEAD
        postUrl('http://localhost:3000/all', { url: formText })
||||||| ff948a6... Updated RegEx, Server endpoint URL
        postUrl('http://localhost:8080/all', { url: formText })
=======
        postUrl('/all', { url: formText })
>>>>>>> parent of ff948a6... Updated RegEx, Server endpoint URL
    }
}

export { handleSubmit }
