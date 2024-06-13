const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const form = document.querySelector('.whole-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!username.value || !title.value || !content.value) {
        alert('Please complete the form.');
        return;  // Prevent form submission if any field is empty
    }

    const newFormData = {
        username: username.value,
        title: title.value,
        content: content.value,
    };

    let existingData = JSON.parse(localStorage.getItem('formData')) || [];
    existingData.push(newFormData);

    localStorage.setItem('formData', JSON.stringify(existingData));

    window.location.href = './blog.html';
});
