function setSelectOptionToCurrentDate() {
    const currentDateSpan = document.getElementById('current-date');
    const dateSelect = document.getElementById('date-select');

    const currentDate = new Date().toLocaleDateString('pt-BR'); 
    currentDateSpan.textContent = currentDate;

    const options = dateSelect.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].text === currentDate) {
            dateSelect.selectedIndex = i;
            break;
        }
    }
}

setSelectOptionToCurrentDate();