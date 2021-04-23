let noteDescription = document.getElementById("description");
let titleSection = document.getElementsByClassName("titleSection");
let closetitlebtn = document.querySelector("button.titleSection");
let pinitems = document.querySelector(".pinItem");
let nonPinItem = document.querySelector(".nonPinItem");
let inputTitle = document.getElementById("inputTitle");
let pin = document.getElementsByClassName("pin");
let deleteNote = document.getElementsByClassName("deletenote");
pin[0].addEventListener("click",function(e){
    if(pin[0].id == "pined"){
        pin[0].removeAttribute("id","pined");    
    }
    else{
        pin[0].setAttribute("id","pined");
    }
    console.log(pin[0].getAttribute("id"));
});

noteDescription.addEventListener("click",function(){
    Array.from(titleSection).forEach(function(element){
    element.classList.add("titleShow");
    
})
});

let showCard = function(){
    title = JSON.parse(window.localStorage.getItem("title"));
    description = JSON.parse(window.localStorage.getItem("description"));
    pinItem = JSON.parse(localStorage.getItem("pin"));
    for(i=0;i<pinItem.length;i++){
        let div = document.createElement("div");
        let span = document.createElement("span");
        span.className="material-icons deletenote";
        span.innerText = "delete";
        div.className = `boxItem delete${i}`;
        div.innerHTML = `<h4>${title[i]}</h4><p>${description[i]}<p>`;
        div.append(span);
        if(pinItem[i]){
            pinitems.append(div);
        }
        else{
            nonPinItem.append(div);
        }
    }
}

let storeItem = function(){
    if(localStorage.length == 0){
        title = []
        description = []
        pin = []
        localStorage.setItem("title",JSON.stringify(title));
        localStorage.setItem("description",JSON.stringify(description));
        localStorage.setItem("pin",JSON.stringify(pin));
    }
    let localTitle = JSON.parse(localStorage.getItem("title"));
    let localDescription = JSON.parse(localStorage.getItem("description"));
    let localPin = JSON.parse(localStorage.getItem("pin"));
    localTitle.push(inputTitle.value);
    localDescription.push(noteDescription.value);
    localPin.push((pin[0].getAttribute("id")=="pined")?true:false);
    localStorage.setItem("title",JSON.stringify(localTitle));
    localStorage.setItem("description",JSON.stringify(localDescription));
    localStorage.setItem("pin",JSON.stringify(localPin));

    pinitems.innerHTML = "<h4>Pin Item</h4>";
    nonPinItem.innerHTML = "<h4>Others</h4>";
    showCard();
}

closetitlebtn.addEventListener("click",function(){
    Array.from(titleSection).forEach(function(element){
        element.classList.remove("titleShow");
})

storeItem();

// delete note
Array.from(document.getElementsByClassName("deletenote")).forEach(function(element,index){
    element.addEventListener("click",function(){
    let deletNodeClass = element.parentNode.classList[1].slice(6,);
    console.log(deletNodeClass);
    let localTitle = JSON.parse(localStorage.getItem("title"));
    let localDescription = JSON.parse(localStorage.getItem("description"));
    let localPin = JSON.parse(localStorage.getItem("pin"));
    localTitle.splice(deletNodeClass,1);
    localDescription.splice(deletNodeClass,1);
    localPin.splice(deletNodeClass,1);
    localStorage.setItem("title",JSON.stringify(localTitle));
    localStorage.setItem("description",JSON.stringify(localDescription));
    localStorage.setItem("pin",JSON.stringify(localPin));
    element.parentNode.classList.remove(`delete${deletNodeClass}`);
    element.parentNode.remove();
    
})
})

});


showCard();

// delete note
Array.from(document.getElementsByClassName("deletenote")).forEach(function(element,index){
    element.addEventListener("click",function(){
    let deletNodeClass = element.parentNode.classList[1].slice(6,);
    console.log(deletNodeClass);
    let localTitle = JSON.parse(localStorage.getItem("title"));
    let localDescription = JSON.parse(localStorage.getItem("description"));
    let localPin = JSON.parse(localStorage.getItem("pin"));
    localTitle.splice(deletNodeClass,1);
    localDescription.splice(deletNodeClass,1);
    localPin.splice(deletNodeClass,1);
    localStorage.setItem("title",JSON.stringify(localTitle));
    localStorage.setItem("description",JSON.stringify(localDescription));
    localStorage.setItem("pin",JSON.stringify(localPin));
    element.parentNode.classList.remove(`delete${deletNodeClass}`);
    element.parentNode.remove();
    
})
})





















