import elements from './selectors.js';
import helperFuncs from './converters.js';
const { display, form, timezone, mode, startTime, minutes, seconds, startButton } = elements;
//TODO: add event listeners here
const { calculateTimeUsingClock, calculateTimeUsingTimer, convertMilisecsToMinsAndSecs } = helperFuncs;
const startTimeValue = new Date(Date.prototype.setHours.apply(new Date(), startTime.value.split(':')));
// console.log(startTimeValue);
const timeLeft = calculateTimeUsingClock('eastern', startTimeValue);
const timerCountdown = calculateTimeUsingTimer(parseInt(minutes.value), parseInt(seconds.value));
let timersTime = convertMilisecsToMinsAndSecs(timerCountdown);
startButton.addEventListener('click', e => {
    e.preventDefault();
    const timerCountdown = calculateTimeUsingTimer(parseInt(minutes.value), parseInt(seconds.value));
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
                // display.innerHTML = `Time's up!`
                clearInterval(updateClock);
                display.innerHTML = `Time's up!`;
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
