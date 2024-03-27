// Initialize Parse
Parse.initialize("KEMGrxmgi8OXU5tq4QtUcM0dw3yquObw6l4jxe26", "WOhouNqoihdEM2ufSH7SeCJz3hPD1Zqp1nLKVP5Z");
Parse.serverURL = "https://parseapi.back4app.com/";

async function deleteParseUser() {
    //Retrieve your Parse Object
    const player = new Parse.Object("SoccerPlayers");

    //set its objectId
    player.set('objectId','HMcTr9rD3s');
    try{
        //destroy the object
        let result = await player.destroy();
        // alert('Object deleted with objectId: ' + result.id);\
        alert('Account deleted');
    }catch(error){
        alert('Failed to delete object, with error code: ' + error.message);
    }
} 

// Add on click listener to call the create parse user function
document.getElementById("createButton").addEventListener("click", async function () {
    deleteParseUser();
});