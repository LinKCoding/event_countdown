function createForm(mode, clock, minutes, seconds, finishedAction) {
    return `
    <h1>Set Countdown Parameters</h1>
    <form id="cd-form">
      <!-- Make the mode a toggle instead... -->
      <label for="mode">Mode</label>
      <select id="mode" name="mode" required>
        <option value="clock" selected="${mode === 'clock'}">Set End Time</option>
        <option value="timer" selected="${mode === 'timer'}">Set Number of Minutes</option>
      </select>
      
      <section id="set-time">
        <label for="start-time">Start Time:</label>
        <input id="start-time" type="time" name="start-time" min="09:00" max="23:59" value="${clock}"required>
      </section>
      
      <section id="set-minutes">
        <label for="minutes">Minutes</label>
        <input id="minutes" type="number" name="minutes" value="0">
        <label for="seconds">Seconds</label>
        <input id="seconds" type="number" name="seconds" value="0">
      </section>
      <br>
    
      <div>
        <input type="radio" id="redirect" name="finish-action">
        <label for="redirect">Redirect To:</label>
        <input type="text" placeholder="Add link here" id="redirect-link">
      </div>
      
      <div>
        <input type="radio" id="nothing" name="finish-action" value="nothing" checked>
        <label for="nothing">Do nothing...</label>
      </div>
      
      <input id="start" type="submit" value="Start Countdown">
    </form>
  `;
}
