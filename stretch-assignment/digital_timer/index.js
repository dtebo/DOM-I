// Stretch I
function createButton(text, clickHandler){
    const btn = document.createElement('button');
    btn.textContent = this.text;
    btn.style.height = '30px';
    btn.style.width = '70px';
    btn.textContent = text;

    btn.addEventListener('click', (e) => {
        clickHandler(e);
    });

    return btn;
}

const button = new createButton("Start", (e) => {
    // Setup and start timer
    const limit = 10;

    window.setInterval((e) => {
        console.log(e);
    }, 10000);
});

const digits = document.querySelector(".digits"); /* Button parent container */
digits.appendChild(button); /* Add the new button to the parent */