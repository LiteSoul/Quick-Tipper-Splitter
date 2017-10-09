const cost = document.querySelector('#cost')
const tipPercent = document.querySelector('#tip-percent')
const tip = document.querySelector('#tip')
const peoples = document.querySelector('#peoples')
const peopleCost = document.querySelector('#people-cost')
const total = document.querySelector('#total')

cost.addEventListener('keyup', totalCalc)
tipPercent.addEventListener('keyup', totalCalc)
peoples.addEventListener('keyup', totalCalc)

function tipCalc() {
	tip.value = Number(cost.value) * (Number(tipPercent.value) / 100 || 0.1)
}

function peopleCalc() {
	peopleCost.value = Number(total.value) / (Number(peoples.value) || 1)
}

function totalCalc() {
	tipCalc()
	peopleCalc()
	total.value = Number(cost.value) + Number(tip.value)
}

//With destructuring
function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
	return total + tip * total + tax * total
}

const bill = tipCalc({ tip: 0.2, total: 200 })
console.log(bill)
