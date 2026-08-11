/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEL = document.querySelector('#input-el')
const convertBtn = document.querySelector('#convert-btn')
const lengthEl = document.querySelector('#length-el')
const volumeEl = document.querySelector('#volume-el')
const massEl = document.querySelector('#mass-el')


const feet = 3.281
const gallon = 0.264
const pound = 2.204

convertBtn.addEventListener('click', () => {
    let inputValue = inputEL.value

    convertLength(inputValue, feet)
    convertVolume(inputValue, gallon)
    converMass(inputValue, pound)

})

function convertLength(input, len) {
    
    let meterToFeet = input * len
    let feetToMeter = input / len

    lengthEl.innerHTML = ` <p id="length-el">${input} meters = ${meterToFeet} feet | ${input} feet = ${feetToMeter.toFixed(3)} meters</p>`
}

function convertVolume(input, gallon) {
    
    let literToGallon = input * gallon
    let gallonToLiter = input / gallon

    volumeEl.innerHTML = ` <p id="length-el">${input} liters = ${literToGallon.toFixed(3)} gallons | ${input} gallons = ${gallonToLiter.toFixed(3)} liters</p>`
}

function converMass(input, pound) {
    
    let kiloToPound = input * pound
    let poundToKilo = input / pound

    massEl.innerHTML = ` <p id="length-el">${input} kilos = ${kiloToPound.toFixed(3)} pounds | ${input} pounds = ${poundToKilo.toFixed(3)} kilos</p>`
}