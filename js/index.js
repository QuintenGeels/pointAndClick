document.getElementById("main-Title").innerText = "Point and click adventure";
const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow")
const mainCharacter = document.getElementById("mainCharacter")

gameWindow.onclick=function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter - offsetCharacter + "px";

    console.log(e.target.id)
    switch(e.target.id){
        case "door1":
        console.log("this is closed")
        document.getElementById("text").innerText = "THIS IS THE BEST POINT AND CLICK ADVENTURE!!!";
        document.getElementById("text").style.backgroundColor = "#fff";
        disapearText(function(){
            document.getElementById("text").innerHTML = '';
            document.getElementById("text").style.backgroundColor = "";
        }, 4000);
            break;
        case "door2":
        console.log("nobody is here")
            break;
        default:
            console.log("idk what to do")
            break;
    }

}


