import elements from './selectors.js';
// import eventListeners from '.eventListeners.js'
import helperFuncs from './converters.js';
import displayers from './templates.js';
const { display, form, mode, startTime, minutes, seconds, startButton, redirectRadio, nothingRadio, redirectLink } = elements;
const { calculateTimeUsingClock, calculateTimeUsingTimer, convertMilisecsToMinsAndSecs, executeFinishedAction } = helperFuncs;
const { formTemplate, countdownTemplate, updateTime } = displayers;
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
let radioButtons = [redirectRadio, nothingRadio];
radioButtons.forEach(button => {
    button.onchange = (e => {
        const element = e.target;
        state.finishedAction = element.id;
    });
});
// const startTimeValue: Date = new Date(Date.prototype.setHours.apply(new Date(), startTime.value.split(':')));
// console.log(startTimeValue);
// const timeLeft: number = calculateTimeUsingClock('eastern', startTimeValue)
startButton.addEventListener('click', e => {
    e.preventDefault();
    const timerCountdown = calculateTimeUsingTimer(state.minutes, state.seconds);
    let timersTime = convertMilisecsToMinsAndSecs(timerCountdown);
    display.innerHTML = countdownTemplate(timersTime.minutes, timersTime.seconds);
    const backButton = document.getElementById('backButton');
    const timeLeft = document.getElementById('timeLeft');
    const updateClock = setInterval(() => {
        // display.innerHTML = `Time left: ${timeLeft} <p>This works ${'!'.repeat(repeater)}</p>`
        timeLeft.innerHTML = updateTime(timersTime.minutes, timersTime.seconds);
        // repeater++
        if (timersTime.seconds === 0) {
            if (timersTime.minutes === 0) {
                // display.innerHTML = `Time's up!`
                clearInterval(updateClock);
                if (state.finishedAction === "redirect")
                    window.location.href = redirectLink.value;
            }
            timersTime.minutes--;
            timersTime.seconds = 59;
            console.log("timmer is running");
        }
        else {
            timersTime.seconds--;
            console.log("timmer is running");
        }
    }, 1000);
    backButton.onclick = (e => {
        clearInterval(updateClock);
        console.log('hi');
        display.innerHTML = formTemplate(state.mode, state.startTime.toString().match(/(\d+:\d+)/)[0], state.minutes, state.seconds, state.finishedAction, redirectLink.value);
        // display.innerHTML = ""
    });
    console.log("this function exists", backButton.onclick);
    // backButton.click();
});
