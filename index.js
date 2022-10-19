const kits = ["snare", "kick", "crash", "tom"]; // create array contain all kits.
const containerEl =document.querySelector(".container"); // declare the div container.

kits.forEach((kit) =>{ //  aplly this step for all kits.
    const btnEl = document.createElement("button"); // create button for each kits.
    btnEl.classList.add("btn"); //  apply css for buttons.
    btnEl.innerText = kit; //  write kit's name into button.
    btnEl.style.backgroundImage = " url(images/" + kit + ".png)" ; // change every background button with its kit's photo.
    containerEl.appendChild(btnEl); // put all button into container div.

    const audioEl = document.createElement("audio");  // create audios *html* .
    audioEl.src = "sounds/" + kit + ".mp3"; // declare every sourc for kits.
    containerEl.appendChild(audioEl); // put all audios into container div.

    btnEl.addEventListener("click", ()=>{ // run the audio wich selected button.
        audioEl.play(); 
    })

    window.addEventListener("keydown", (event)=>{  // run the audio wich select the first char of name. 
        if(event.key === kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(.9)"; // add Animation to selected button. 
            setTimeout(()=>{
                btnEl.style.transform = "scale(1)";
            }, 200)
        }
    })
});