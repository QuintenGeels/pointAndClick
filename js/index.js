document.getElementById("mainTitle").innerText = "Point and Click adventure";
const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.

        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);
        switch (e.target.id) {
            case "door1":
                showMessage("This sign says to inspect the obelisk, TO THE OBELISK IT IS!");
                break;
            case "door2":
                showMessage("Only gyberisch signs here... what should I do?");
                break;
            default:
                hideMessage();
                break;
        }
    }
}

function showMessage(message) {
    mainCharacterSpeech.innerHTML = message;
    mainCharacterSpeech.style.opacity = 1;
    setTimeout(hideMessage, 4000);
}

function hideMessage() {
    mainCharacterSpeech.innerHTML = "...";
    mainCharacterSpeech.style.opacity = 0;
}