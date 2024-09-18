document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('pt-BR', options);
    
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
    
    window.currentFormattedDate = formattedDate;
});
