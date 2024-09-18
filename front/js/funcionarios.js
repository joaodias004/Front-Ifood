// Example JSON data
const employeesData = {
    "employees": [
        {
            "name": "Gabriel",
            "id": "#02",
            "fullName": "Gabriel Da Silva",
            "position": "Caixa"
        },
        {
            "name": "Pedro",
            "id": "#03",
            "fullName": "Pedro Da Silva",
            "position": "Cozinheiro"
        },
        {
            "name": "Igor",
            "id": "#04",
            "fullName": "Igor Da Silva",
            "position": "Cozinheiro"
        },
    ]
};


function createEmployeeCards(data) {
    const container = document.querySelector('#employeesContent .row');

    data.employees.forEach(employee => {
        const card = document.createElement('div');
        card.className = 'col-md-4';

        card.innerHTML = `
            <div class="employee-card">
                <h5>${employee.name} <small class="text-muted float-end">Id ${employee.id}</small></h5>
                <p class="mb-1">${employee.fullName}</p>
                <p class="text-muted mb-2">Nome completo</p>
                <p class="mb-1">${employee.position}</p>
                <p class="text-muted mb-3">Cargo</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-outline-danger btn-sm">Remover</a>
                    <a href="#" class="btn btn-danger btn-sm">Detalhes <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    const addButtonCard = document.createElement('div');
    addButtonCard.className = 'col-md-4';

    addButtonCard.innerHTML = `
        <div class="employee-card text-center">
            <a href="#" class="btn btn-danger custom-btn2 mt-5 mb-3">Adicionar Funcionário</a>
            <p><a href="#" class="text-muted">Editar funcionários</a></p>
        </div>
    `;

    container.appendChild(addButtonCard);
}

createEmployeeCards(employeesData);