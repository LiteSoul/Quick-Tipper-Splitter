const cost = document.querySelector('#cost')
const tipPercent = document.querySelector('#tipPercent')
const tip = document.querySelector('#tip')
const peoples = document.querySelector('#peoples')
const people = document.querySelector('#people')
const total = document.querySelector('#total')

cost.addEventListener('keyup', tipcalc)
tipPercent.addEventListener('keyup', tipCalc)
peoples.addEventListener('keyup', peopleCalc)

function tipCalc() {
	tip.value = cost.value * (tipPercent.value / 100 || 0.1)
}

function peopleCalc() {}

function totalCalc() {}
