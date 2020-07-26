// TODO: once it hits 1 minute, start calculating the seconds
// TODO: remove mode 
// TODO: Rename this helper functions or something
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
function executeFinishedAction(choice, url = "https://www.codecademy.com/learn") {
    switch (choice) {
        case "redirect":
            window.location.href = url;
            break;
        case "close":
            window.open('', '_self', '');
            window.close();
            break;
        case "nothing":
            return;
        default:
            return;
    }
}
export default { calculateTimeUsingClock, calculateTimeUsingTimer, convertMilisecsToMinsAndSecs, executeFinishedAction };
