async function changeParseUser() {
    // Get the username as an identifier for the user to update
    const username = document.getElementById("usr_name").value;

    // Use Parse.User.logIn to get the current user object
    const currentUser = await Parse.User.logIn(username, document.getElementById("usr_psswd").value);

    if (currentUser) {
        // Update the user object with new values (if needed)
        currentUser.set("email", document.getElementById("usr_email").value);
        // ... update other fields as needed

        try {
            // Call save to update the user
            await currentUser.save();
            alert("User updated successfully!");
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    } else {
        alert("User not found!");
    }
}

document.getElementById("changeButton").addEventListener("click", async function () {
    changeParseUser();
})