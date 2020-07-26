const display = <HTMLInputElement>document.getElementById('display')
const form = <HTMLInputElement>document.getElementById('cd-form')

const mode = <HTMLSelectElement>document.getElementById('mode')
const startTime = <HTMLInputElement>document.getElementById('start-time')
const minutes = <HTMLInputElement>document.getElementById('minutes')
const seconds = <HTMLInputElement>document.getElementById('seconds')
const startButton = <HTMLInputElement>document.getElementById('start')
const redirectRadio = <HTMLInputElement>document.getElementById('redirect')
const nothingRadio = <HTMLInputElement>document.getElementById('nothing')
const redirectLink = <HTMLInputElement>document.getElementById('redirect-link')


export default { display, form, mode, startTime, minutes, seconds, startButton, redirectRadio, nothingRadio, redirectLink }