// TODO: once it hits 1 minute, start calculating the seconds
// TODO: incorporate mode
function calculateTimeUsingClock(mode, futureTime) {
    const timeNow = new Date().getTime();
    let diff = futureTime.getTime() - timeNow;
    console.log("the time is now:", timeNow, "the set time is", futureTime.getTime());
    // Rounds the time left in minutes
    diff = Math.round(diff / 60000);
    return diff;
}
function calculateTimeUsingTimer(minutes, seconds) {
    console.log("first funct", "minutes is", minutes, "seconds is", seconds);
    return (minutes * 60 + seconds) * 1000;
}
function convertMilisecsToMinsAndSecs(miliseconds) {
    miliseconds /= 1000;
    let minutes = Math.round(miliseconds / 60);
    let seconds = miliseconds % 60;
    console.log("minutes is", minutes, "seconds is", seconds);
    return { minutes, seconds };
}
export default { calculateTimeUsingClock, calculateTimeUsingTimer, convertMilisecsToMinsAndSecs };
