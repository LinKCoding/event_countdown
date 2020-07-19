import elements from './selectors.js'
import calculateTimeUsingClock from './converters.js'

const { display, form, timezone, mode, startTime, minutes, seconds, startButton } = elements

// startButton.onclick((event: MouseEvent) => {
//   // const target = e.target as HTMLElement;
  
//   event.preventDefault()
//   return null
// })

const timeLeft: number = calculateTimeUsingClock('eastern', new Date('July 19, 2020 18:11:00'))

form.addEventListener('submit', e => {
  e.preventDefault()
  display.innerHTML = `Time left: ${timeLeft}`
})

console.log(calculateTimeUsingClock('eastern', new Date('July 19, 2020 18:11:00')));




