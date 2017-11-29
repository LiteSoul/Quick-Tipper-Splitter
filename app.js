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

//The TIP Buttons:
const tipButtons = document.querySelectorAll('.tip-btn')

Array.from(tipButtons).forEach(link => {
	link.addEventListener('click', tipCalcBtn)
})

function tipCalcBtn() {
	tipPercent.value = this.value
	blueClassRemover(tipButtons)
	this.classList.add('pure-button-primary')
	grandTotal()
}

//The Person Buttons:
const personButtons = document.querySelectorAll('.person-btn')

Array.from(personButtons).forEach(link => {
	link.addEventListener('click', personCalcBtn)
})

function personCalcBtn() {
	persons.value = this.value
	blueClassRemover(personButtons)
	this.classList.add('pure-button-primary')
	grandTotal()
}

//Toggles blue button class
function blueClassRemover(hereBtn) {
	Array.from(hereBtn).forEach(link =>
		link.classList.remove('pure-button-primary')
	)
}

//Math Calculations
function calculations() {
	tip.value = Math.round(cost.value * (tipPercent.value / 100))
	costPerPerson.value = Math.ceil(total.value / persons.value)
	total.value = Number(cost.value) + Number(tip.value)
}

function grandTotal() {
	calculations()
	calculations()
}
