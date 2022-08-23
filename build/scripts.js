const fatMan = document.getElementById("fatMan");

function jump(){
    if(fatMan.classList != "jump"){
        fatMan.classList.add("jump");
        setTimeout(function(){
            fatMan.classList.remove("jump");
        }, 300)
    }

}

document.addEventListener("keydown", function(event){jump()})