// Stretch
function createButton(text, clickHandler){
    const btn = document.createElement('button');
    btn.textContent = this.text;
    btn.style.height = '30px';
    btn.style.width = '70px';
    btn.textContent = text;
    btn.className = 'btn';

    btn.addEventListener('click', (e) => {
        clickHandler(e);
    });

    return btn;
}

class Timer{
    constructor(interval, triggeringElement){
        this.id = "";
        this.interval = interval;
        this.secondsTens = document.querySelector("#secondTens");
        this.secondsOnes = document.querySelector("#secondOnes");
        this.msHundreds = document.querySelector("#msHundreds");
        this.msTens = document.querySelector("#msTens");

        this.seconds = 0;
        this.milliseconds = 0;
        
        this.btn = document.getElementsByClassName(triggeringElement);
    }

    start(){
        this.btn[0].setAttribute('disabled', true);

        this.id = window.setInterval(() => {
            this.incrementMilliseconds();

            // If a whole second has passed
            if(this.milliseconds % 1000 === 0){
                this.incrementSeconds();
            }
        }, this.interval);
    }

    incrementMilliseconds(){
        this.milliseconds += 10;

        let millStr = this.milliseconds.toString();

        if(this.milliseconds % 100 === 0){

            // If we haven't reached ten seconds
            if(this.milliseconds !== 10000){
                this.msHundreds.textContent = millStr[0];
            }
            else{
                //Reset milliseconds
                this.msHundreds.textContent = "0";
                this.msTens.textContent = "0";
            }
        }
        else{
            this.msTens.textContent = millStr[1];
        }
    }

    incrementSeconds(){
        this.seconds += 1;
    
        // Every second (up to 9 seconds)
        if(this.seconds < 10){
            this.secondsTens.textContent = "0";

            // Increment the display by one second
            this.secondsOnes.textContent = this.seconds.toString();
        }
        else{
            this.secondsOnes.textContent = "0";
            this.secondsTens.textContent = "1";

            // Don't allow the timer to run beyond 10 seconds
            this.clear(this.id);
        }
    }

    clear(id){
        this.btn[0].disabled = false;

        clearInterval(id);
    }

    reset(){
        // Reset all values
        this.seconds = 0;
        this.milliseconds = 0;
        this.secondsTens.textContent = "0";
        this.secondsOnes.textContent = "0";
        this.msHundreds.textContent = "0";
        this.msTens.textContent = "0";
    }
}

const button = new createButton("Start", (e) => {
    timer.start();
});

const timer = new Timer(10, "btn");

const reset = new createButton("Reset", (e) => {
    timer.reset();
});

const digits = document.querySelector(".digits"); /* Button parent container */
digits.appendChild(button); /* Add the new button to the parent */
digits.appendChild(reset); /* Add the reset button to the parent */