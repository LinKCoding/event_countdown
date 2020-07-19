// TODO: once it hits 1 minute, start calculating the seconds
// TODO: incorporate mode
function calculateTimeUsingClock(mode, time) {
    const timeNow = new Date().getTime();
    let diff = time.getTime() - timeNow;
    // Rounds the time left in minutes
    diff = Math.round(diff / 60000);
    return diff;
}
export default calculateTimeUsingClock;
