function drumkit(event) {
    const aud = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    // console.log(event.keyCode);
    if (!aud) return; //this stops the function, if the pressed key is missing.
    aud.currentTime = 0 //repeats on multiple inputs/rewind from start after the key is pressed
    aud.play();
    key.classList.add('playing');
};
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', drumkit);
