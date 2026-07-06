const form = document.querySelector("form")

form.onsubmit = calculateDailyRate

function calculateDailyRate(e) {
    e.preventDefault()

    form.daily.value = form.month.value / form.workdays.value
}
