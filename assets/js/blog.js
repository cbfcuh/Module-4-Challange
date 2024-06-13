const displayContainer = document.getElementById('blog-content');

function addItemsToMain() {
    // JSON.parse is used to help extropolate the data into indiviual pieces
    const storedFormData = JSON.parse(localStorage.getItem('formData'));

    // We then call for the nesscarry data from the localStorage and print it
    if (storedFormData) {
        storedFormData.forEach(data => {
            const formDataDiv = document.createElement('div');
            formDataDiv.className = 'post';
            formDataDiv.innerHTML = `
                <h2><em><u>${data.title}</u></em></h2>
                <p><em><u>Posted by:</u></em><br>${data.username}</p>
                <p><em><u>Content:</u></em><br>${data.content}</p>`;
            displayContainer.appendChild(formDataDiv);
        });
    }
}

addItemsToMain();

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});
