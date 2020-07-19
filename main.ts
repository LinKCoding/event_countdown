import elements from './selectors.js'
import calculateTimeUsingClock from './converters.js'

const { display, form, timezone, mode, startTime, minutes, seconds, startButton } = elements

// startButton.onclick((event: MouseEvent) => {
//   // const target = e.target as HTMLElement;
  
//   event.preventDefault()
//   return null
// })

const timeLeft: number = calculateTimeUsingClock('eastern', new Date('July 19, 2020 18:20:00'))

startButton.addEventListener('click', e => {
  e.preventDefault()
  display.innerHTML = `Time left: ${timeLeft}`
  let repeater: number = 1
  // TODO: Uncomment later when other things work...
  // setInterval(() => {
  //   display.innerHTML = `Time left: ${timeLeft} <p>This works ${'!'.repeat(repeater)}</p>`
  //   repeater++
  // }, 500)
})

// console.log(calculateTimeUsingClock('eastern', new Date('July 19, 2020 18:11:00')));




