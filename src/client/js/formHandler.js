function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
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
                return newData
            } catch (error) {
                console.log("error", error);
            }
        };

        const getData = async (url = '') => {
            const req = await fetch(url);
            try {
                const data = await req.json();
                document.getElementById('results').innerHTML = `<div>label: ${data.label}</div><div>code: ${data.code}</div><div>confidence: ${data.confidence}</div>`
            } catch (error) {
                console.log("error", error);
            }
        };

        postUrl('/all', { url: formText })
            .then(
                getData('/data')
            )



    }
}

export { handleSubmit }
