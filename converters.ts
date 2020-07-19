// TODO: once it hits 1 minute, start calculating the seconds
// TODO: incorporate mode
function calculateTimeUsingClock (mode: string, futureTime: Date) {
  const timeNow: number = new Date().getTime()
  
  let diff: number = futureTime.getTime() - timeNow
  console.log("the time is now:", timeNow, "the set time is", futureTime.getTime());
  
  // Rounds the time left in minutes
  diff = Math.round(diff / 60000);
  return diff
}

export default calculateTimeUsingClock