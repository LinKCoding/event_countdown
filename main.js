import elements from './selectors.js';
import calculateTimeUsingClock from './converters.js';
var display = elements.display, form = elements.form, timezone = elements.timezone, mode = elements.mode, startTime = elements.startTime, minutes = elements.minutes, seconds = elements.seconds, startButton = elements.startButton;
// startButton.onclick((event: MouseEvent) => {
//   // const target = e.target as HTMLElement;
//   event.preventDefault()
//   return null
// })
var timeLeft = calculateTimeUsingClock('eastern', new Date('July 19, 2020 18:11:00'));
form.addEventListener('submit', function (e) {
    e.preventDefault();
    display.innerHTML = "Time left: " + timeLeft;
});
console.log(calculateTimeUsingClock('eastern', new Date('July 19, 2020 18:11:00')));
