// TODO: once it hits 1 minute, start calculating the seconds
// TODO: incorporate mode
function calculateTimeUsingClock (mode: string, time: Date) {
  const timeNow: number = new Date().getTime()
  
  let diff: number = time.getTime() - timeNow
  
  // Rounds the time left in minutes
  diff = Math.round(diff / 60000);
  return diff
}

export default calculateTimeUsingClock