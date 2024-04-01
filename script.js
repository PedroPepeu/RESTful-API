const createUserButton = document.getElementById('createButton');

createUserButton.addEventListener('click', async () => {
    const username = document.getElementById('usr_name').value;
    const email = document.getElementById('usr_email').value;
    const password = document.getElementById('usr_psswd').value;

    try {
        const response = await fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            throw new Error(`Error creating user: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('User created successfully:', data);
        // Handle successful user creation (e.g., display a success message)
    } catch (error) {
        console.error('Error creating user:', error.message);
        // Handle creation errors (e.g., display an error message)
    }
});