window.onchange = handleFieldSelection

const form = document.getElementById('inputs')
const calcMap = {
    monthly: [
        ['monthly'],
        ['daily', 'dpm'],
        ['hourly', 'dpm', 'hpd'],
    ],
    daily: [
        ['daily'],
        ['monthly', 'dpm'],
        ['hourly', 'hpd'],
    ],
    hourly: [
        ['hourly'],
        ['daily', "hpd"],
        ['monthly', 'dpm', 'hpd'],
    ],
    dpm: [
        ['dpm'],
        ['monthly', 'daily'],
        ['monthly', 'hourly', 'hpd'],
    ],
    hpd: [
        ['hpd'],
        ['daily', 'hourly'],
        ['mothly', 'dpm', 'hourly'],
    ],
}

form.onsubmit = handleSubmit

function handleFieldSelection(e) {
    if (!e.target.matches('select')) return

    const select = e.target
    const selected = Array.from(select.selectedOptions).map(o => o.value)
    const form = document.getElementById(select.name)

    for (const div of form.children) {
        div.hidden = !selected.includes(div.dataset.name)
    }
}

function handleSubmit() {

}