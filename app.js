const cost = document.querySelector('#cost')
const tipPercent = document.querySelector('#tip-percent')
const tip = document.querySelector('#tip')
const persons = document.querySelector('#persons')
const costPerPerson = document.querySelector('#cost-per-person')
const total = document.querySelector('#total')

cost.addEventListener('keydown', grandTotal)
cost.addEventListener('keyup', grandTotal)
tipPercent.addEventListener('keydown', grandTotal)
tipPercent.addEventListener('keyup', grandTotal)
persons.addEventListener('keydown', grandTotal)
persons.addEventListener('keyup', grandTotal)

function grandTotal() {
	totalCalc()
	tipCalc()
	personCalc()
	totalCalc()
	tipCalc()
	personCalc()
}

function tipCalc() {
	tip.value = Math.round(cost.value * (tipPercent.value / 100))
}

function personCalc() {
	costPerPerson.value = Math.ceil(total.value / persons.value)
}

function totalCalc() {
	total.value = Number(cost.value) + Number(tip.value)
}

//The TIP Buttons:
const tipBtn = document.querySelectorAll('.tip-btn')

Array.from(tipBtn).forEach(link => {
	link.addEventListener('click', tipCalcBtn)
})

function tipCalcBtn() {
	tipPercent.value = this.value
	grandTotal()
}
