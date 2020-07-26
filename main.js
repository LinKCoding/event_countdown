import elements from './selectors.js';
// import eventListeners from '.eventListeners.js'
import helperFuncs from './converters.js';
const { display, form, mode, startTime, minutes, seconds, startButton } = elements;
// const { modeChange } = eventListeners
let state = {
    mode: "clock",
    // should this be 1PM?
    startTime: new Date(Date.prototype.setHours.apply(new Date(), startTime.value.split(':'))),
    minutes: 0,
    seconds: 0
};
mode.onchange = (e) => {
    const element = e.currentTarget;
    const value = element.selectedOptions[0].value;
    state = Object.assign(Object.assign({}, state), { mode: value });
};
minutes.onchange = (e) => {
    const element = e.target;
    const value = parseInt(element.value);
    state = Object.assign(Object.assign({}, state), { minutes: value });
    console.log(state);
};
seconds.onchange = (e) => {
    const element = e.target;
    const value = parseInt(element.value);
    state = Object.assign(Object.assign({}, state), { seconds: value });
    console.log(state);
};
let minutesVal = minutes.value ? parseInt(minutes.value, 10) : 0;
let secondsVal = seconds.value ? parseInt(seconds.value, 10) : 0;
//TODO: add event listeners here
const { calculateTimeUsingClock, calculateTimeUsingTimer, convertMilisecsToMinsAndSecs } = helperFuncs;
const startTimeValue = new Date(Date.prototype.setHours.apply(new Date(), startTime.value.split(':')));
// console.log(startTimeValue);
const timeLeft = calculateTimeUsingClock('eastern', startTimeValue);
startButton.addEventListener('click', e => {
    e.preventDefault();
    const timerCountdown = calculateTimeUsingTimer(state.minutes, state.seconds);
    console.log(state);
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
            }
            timersTime.minutes--;
            timersTime.seconds = 60;
        }
        else {
            timersTime.seconds--;
        }
    }, 1000);
});
// console.log(calculateTimeUsingClock('eastern', new Date('July 19, 2020 18:11:00')));
