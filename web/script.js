window.onchange = handleFieldSelection

const [inputForm, outputForm] = document.forms
const calcMap = {
    monthly: [
        {
            fields: ['monthly'],
            calc: (monthly) => monthly,
        },
        {
            fields: ['daily', 'dpm'],
            calc: (daily, dpm) => daily * dpm,
        },
        {
            fields: ['hourly', 'dpm', 'hpd'],
            calc: (hourly, dpm, hpd) => hourly * hpd * dpm,
        },
    ],
    daily: [
        {
            fields: ['daily'],
            calc: (daily) => daily,
        },
        {
            fields: ['monthly', 'dpm'],
            calc: (monthly, dpm) => monthly / dpm,
        },
        {
            fields: ['hourly', 'hpd'],
            calc: (hourly, hpd) => hourly * hpd,
        },
    ],
    hourly: [
        {
            fields: ['hourly'],
            calc: (hourly) => hourly,
        },
        {
            fields: ['daily', "hpd"],
            calc: (daily, hpd) => daily / hpd,
        },
        {
            fields: ['monthly', 'dpm', 'hpd'],
            calc: (monthly, dpm, hpd) => monthly / dpm / hpd,
        },
    ],
    dpm: [
        {
            fields: ['dpm'],
            calc: (dpm) => dpm,
        },
        {
            fields: ['monthly', 'daily'],
            calc: (monthly, daily) => monthly / dpm,
        },
        {
            fields: ['monthly', 'hourly', 'hpd'],
            calc: (monthly, hourly, hpd) => monthly / (hourly * hpd),
        },
    ],
    hpd: [
        {
            fields: ['hpd'],
            calc: (hpd) => hoursToDuration(hpd),
        },
        {
            fields: ['daily', 'hourly'],
            calc: (daily, hourly) => hoursToDuration(daily / hourly),
        },
        {
            fields: ['mothly', 'dpm', 'hourly'],
            calc: (monthly, dpm, hourly) => hoursToDuration(monthly / dpm / hourly),
        },
    ],
}

inputForm.onsubmit = handleSubmit

function handleFieldSelection(e) {
    if (!e.target.matches('select')) return

    const select = e.target
    const selected = Array.from(select.selectedOptions).map(o => o.value)
    const form = document.getElementById(select.name)

    for (const div of form.children) {
        div.hidden = !selected.includes(div.dataset.name)
    }
}

function handleSubmit(e) {
    e.preventDefault()

    const outputFields = outputForm.querySelectorAll(":not([hidden])>output")
    const inputFields = inputForm.querySelectorAll(":not([hidden])>input")
    const inputNames = Array.from(inputFields).map(input => input.name)

    for (const out of outputFields) {
        for (const { fields, calc } of calcMap[out.name]) {
            if (fields.every(name => inputNames.includes(name))) {
                const values = fields.map(key => inputForm[key].value)
                const value = calc(...values)

                out.value = value.toFixed ? value.toFixed(2):value
                break
            }
        }

        out.value ||= "Not enough data!"
    }
}

function hoursToDuration(hours) {
    const fullHours = Math.floor(hours)
    const fullMinutes = Math.floor((hours - fullHours) * 60)

    return fullHours + "h " + fullMinutes + "m" 
}