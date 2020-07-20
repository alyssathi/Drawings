const keydown = (event) =>{
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${event.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.toggle("play");
    key.classList.toggle("play::after");
}

const clicker = (event) => {
    let target = event.target;
    
    const audio = document.querySelector(`audio[data-key="${target.dataset.key}"]`);

    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "height") return; //short stop

    this.classList.remove("play")
}

const keys = document.querySelectorAll(".piano-key");
keys.forEach(key => key.addEventListener('webkitTransitionEnd', removeTransition));


window.addEventListener("keydown", keydown);
window.addEventListener("click",clicker);
