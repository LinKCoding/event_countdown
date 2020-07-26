import elements from './selectors.js';
// import eventListeners from '.eventListeners.js'
import helperFuncs from './converters.js';
const { display, form, mode, startTime, minutes, seconds, startButton, redirectRadio, closeRadio, nothingRadio, redirectLink } = elements;
let state = {
    mode: "clock",
    // should this be 1PM?
    startTime: new Date(Date.prototype.setHours.apply(new Date(), startTime.value.split(':'))),
    minutes: 0,
    seconds: 0,
    finishedAction: "nothing"
};
mode.onchange = (e) => {
    const element = e.currentTarget;
    const value = element.selectedOptions[0].value;
    state.mode = value;
};
minutes.onchange = (e) => {
    const element = e.target;
    const value = parseInt(element.value);
    state.minutes = value;
};
seconds.onchange = (e) => {
    const element = e.target;
    const value = parseInt(element.value);
    state.seconds = value;
};
let radioButtons = [redirectRadio, closeRadio, nothingRadio];
radioButtons.forEach(button => {
    button.onchange = (e => {
        const element = e.target;
        state.finishedAction = element.id;
    });
});
const { calculateTimeUsingClock, calculateTimeUsingTimer, convertMilisecsToMinsAndSecs, executeFinishedAction } = helperFuncs;
const startTimeValue = new Date(Date.prototype.setHours.apply(new Date(), startTime.value.split(':')));
// console.log(startTimeValue);
// const timeLeft: number = calculateTimeUsingClock('eastern', startTimeValue)
startButton.addEventListener('click', e => {
    e.preventDefault();
    const timerCountdown = calculateTimeUsingTimer(state.minutes, state.seconds);
    let timersTime = convertMilisecsToMinsAndSecs(timerCountdown);
    display.innerHTML = `Time left: ${timersTime.minutes} minutes and ${timersTime.seconds} seconds`;
    let repeater = 1;
    // TODO: Uncomment later when other things work...
    const updateClock = setInterval(() => {
        // display.innerHTML = `Time left: ${timeLeft} <p>This works ${'!'.repeat(repeater)}</p>`
        display.innerHTML = `Time left: ${timersTime.minutes} minutes and ${timersTime.seconds} seconds`;
        // repeater++
        if (timersTime.seconds === 0) {
            if (timersTime.minutes === 0) {
                display.innerHTML = `Time's up!`;
                clearInterval(updateClock);
                if (state.finishedAction === "redirect")
                    window.location.href = redirectLink.value;
            }
            timersTime.minutes--;
            timersTime.seconds = 60;
        }
        else {
            timersTime.seconds--;
        }
    }, 1000);
});
