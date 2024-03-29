async function deleteParseUser() {
    console.log("delete");
    // Get the username as an identifier for the user to delete
    const username = document.getElementById("usr_name").value;

    // Use Parse.User.logIn to get the user object
    const currentUser = await Parse.User.logIn(username, document.getElementById("usr_psswd").value);

    if (currentUser) {
        try {
            // Call destroy to delete the user
            await currentUser.destroy();
            alert("User deleted successfully!");
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    } else {
        alert("User not found!");
    }
}

document.getElementById("deleteButton").addEventListener("click", async function () {
    console.log("button");
    deleteParseUser();
});