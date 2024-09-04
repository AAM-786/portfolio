// Load education data dynamically
document.addEventListener('DOMContentLoaded', () => {
    const educationTable = document.getElementById('education-table');

    if (educationTable) {
        fetch('data/education.json')
            .then(response => response.json())
            .then(data => {
                const tableBody = educationTable.querySelector('tbody');
                data.forEach(entry => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${entry.degree}</td>
                        <td>${entry.institution}</td>
                        <td>${entry.year}</td>
                        <td>${entry.s} </td>
                        <td>${entry.percentage} </td>
                        
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error loading education data:', error));
    }
});

// Handle contact form submission
document.getElementById('contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
     
    };

    // Simulate sending data (e.g., to a server)
    console.log('Form submitted with data:', data);

    // Show feedback to the user
    const feedback = document.getElementById('form-feedback');
    feedback.innerHTML = '<p>Thank you for your message! We will get back to you soon.</p>';
    feedback.style.color = 'green';
});





// Adding Greetings 


// Load education data dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Dark/Light Mode
    const toggleButton = document.getElementById('toggle-mode');
    const savedMode = localStorage.getItem('mode') || 'dark';
    
    document.body.classList.toggle('light-mode', savedMode === 'light');

    toggleButton.addEventListener('click', () => {
        const isLightMode = document.body.classList.toggle('light-mode');
        localStorage.setItem('mode', isLightMode ? 'light' : 'dark');
    });

    // Dynamic Date and Greeting
    const greetingMessage = document.getElementById('greeting-message');

    if (greetingMessage) {
        const now = new Date();
        const hours = now.getHours();
        let greeting = 'Good Evening';
        if (hours < 12) {
            greeting = 'Good Morning';
        } else if (hours < 18) {
            greeting = 'Good Afternoon';
        }

        const formattedDate = now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        greetingMessage.innerHTML = `<strong>${greeting}</strong><br>${formattedDate}`;
    }
});
