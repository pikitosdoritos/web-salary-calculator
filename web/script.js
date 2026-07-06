window.onchange = handleFieldSelection

function handleFieldSelection(e) {
    if (!e.target.matches("select")) return
    
    const select = e.target
    const selected = Array.from(select.selectedOptions).map(o => o.value)
    const form = document.getElementById(select.name)
    
    for (const div of form.children) {
        div.hidden = !selected.includes(div.dataset.name)        
    }
}