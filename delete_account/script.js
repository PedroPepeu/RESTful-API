const deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', async () => {
    const username = document.getElementById('usr_name').value;
    const email = document.getElementById('usr_email').value;
    const password = document.getElementById('usr_psswd').value;

    try {
        // Implement logic to delete user based on username and password (replace with actual logic)
        const response = await fetch('/users/' + username, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            // You might need to send authentication credentials in the request
        });

        if (!response.ok) {
            throw new Error(`Error deleting user: ${response.statusText}`);
        }

        console.log('User deleted successfully');
        // Handle successful deletion (e.g., display a success message)
    } catch (error) {
        console.error('Error deleting user:', error.message);
        // Handle deletion errors (e.g., display an error message)
    }
});
