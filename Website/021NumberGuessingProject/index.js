const min = 1;
const max = 10;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
let guess;
let running = true;
while (running) {
    guess = window.prompt(`Guess the number B/w ${min} and ${max}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("Please Enter The Valid number");

    }
    else if (guess < min || guess > max) {
        window.alert("Please Enter The Valid number");
    }
    else {

        attempts++;
        if (answer < guess) {
            window.alert("Your answer Too high");
        }
        else if (answer > guess) {
            window.alert("Your answer TOO low")
        }
        else {
            window.alert(`Correct!!! You take ${attempts}`);
            running = false;
        }

    }
}
