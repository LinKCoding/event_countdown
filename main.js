import elements from './selectors.js';
import calculateTimeUsingClock from './converters.js';
var timezone = elements.timezone, mode = elements.mode, startTime = elements.startTime, minutes = elements.minutes, seconds = elements.seconds;
console.log(calculateTimeUsingClock('eastern', new Date('July 19, 2020 18:11:00')));
