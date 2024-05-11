document.getElementById('simpleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
        message: document.getElementById('message').value
    };

    fetch('https://hook.us1.make.com/pa9a2atty29md7kd3y5byva159r1xkxh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => alert('Form submitted successfully!'))
    .catch((error) => console.error('Error:', error));
});
