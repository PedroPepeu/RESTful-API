// Initialize Parse
Parse.initialize("KEMGrxmgi8OXU5tq4QtUcM0dw3yquObw6l4jxe26", "WOhouNqoihdEM2ufSH7SeCJz3hPD1Zqp1nLKVP5Z");
Parse.serverURL = "https://parseapi.back4app.com/";

// Create a new User
async function createParseUser() {
    // Creates a new Parse "User" object, which is created by default in your Parse app
    let user = new Parse.User();
    // Set the input values to the new "User" object
    user.set("username", document.getElementById("usr_name").value);
    user.set("email", document.getElementById("usr_email").value);
    user.set("password", document.getElementById("usr_psswd").value);
    try {
        // Call the save method, which returns the saved object if successful
        user = await user.save();
        if (user !== null) {
            // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
            alert(
                `New object created with success! ObjectId: ${user.id
                }, ${user.get("username")}`
            );
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

// Add on click listener to call the create parse user function
document.getElementById("createButton").addEventListener("click", async function () {
    createParseUser();
});

// async function changeParseUser() {
//     // Creates a new Parse "User" object, which is created by default in your Parse app
//     let user = new Parse.User();
//     // Set the input values to the new "User" object
//     user.set("username", document.getElementById("usr_name").value);
//     user.set("email", document.getElementById("usr_email").value);
//     user.set("password", document.getElementById("usr_psswd").value);
//     try {
//         // Call the save method, which returns the saved object if successful
//         user = await user.save();
//         if (user !== null) {
//             // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
//             alert(
//                 `New object created with success! ObjectId: ${user.id
//                 }, ${user.get("username")}`
//             );
//         }
//     } catch (error) {
//         alert(`Error: ${error.message}`);
//     }
// }