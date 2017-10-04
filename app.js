const cost = document.querySelector('#cost')
const tipPercent = document.querySelector('#tipPercent')
const tip = document.querySelector('#tip')

cost.addEventListener('keyup', tipcalc)
tipPercent.addEventListener('keyup', tipcalc)

function tipcalc() {
	tip.value = cost.value * (tipPercent.value / 100 || 0.1)
}
