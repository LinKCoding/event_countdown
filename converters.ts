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

function calculateTimeUsingTimer (minutes: number, seconds: number) {
  return (minutes * 60 + seconds) * 1000
}

function convertMilisecsToMinsAndSecs (miliseconds: number){
  miliseconds *= 1000
  let minutes = Math.round(miliseconds / 60)
  let seconds = miliseconds % 60
  return { minutes, seconds }
}

export default { calculateTimeUsingClock, calculateTimeUsingTimer, convertMilisecsToMinsAndSecs }