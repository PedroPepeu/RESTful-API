const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', async () => {
    const username = document.getElementById('usr_name').value;
    const email = document.getElementById('usr_email').value;
    const password = document.getElementById('usr_psswd').value;

    try {
        // Implement logic to update user data based on username and new data (replace with actual logic)
        const response = await fetch('/users/' + username, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            // You might need to send authentication credentials in the request
        });

        if (!response.ok) {
            throw new Error(`Error updating user: ${response.statusText}`);
        }

        const updatedUser = await response.json();
        console.log('User updated successfully:', updatedUser);
        // Handle successful update (e.g., display a confirmation message)
    } catch (error) {
        console.error('Error updating user:', error.message);
        // Handle update errors (e.g., display an error message)
    }
});
