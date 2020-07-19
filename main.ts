import elements from './selectors.js'
import calculateTimeUsingClock from './converters.js'

const { timezone, mode, startTime, minutes, seconds } = elements

console.log(calculateTimeUsingClock('eastern', new Date('July 19, 2020 18:11:00')));


