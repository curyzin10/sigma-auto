

function displayClients() {
    fetch('list_clients.php') // Crie este arquivo para listar clientes
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('client-list');
        list.innerHTML = ''; // Limpa a lista atual
        data.forEach(client => {
            const listItem = document.createElement('li');
            listItem.textContent = `CPF: ${client.cpf}, Nome: ${client.nome}, Endereço: ${client.endereco}`;
            listItem.innerHTML += ` <button onclick="removeClient(${client.id})">Remover</button>`;
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error('Erro:', error));
}
// Exibe a lista de clientes ao carregar a página
displayClients();

// Função para adicionar um cliente
function addClient() {
    const cpf = prompt("CPF do Cliente:");
    const nome = prompt("Nome do Cliente:");
    const endereco = prompt("Endereço do Cliente:");
    const telefone_residencial = prompt("Telefone Residencial:");
    const celular = prompt("Celular:");
    const renda = prompt("Renda:");

    if (cpf && nome && endereco && telefone_residencial && celular && renda) {
        const formData = new FormData();
        formData.append('cpf', cpf);
        formData.append('nome', nome);
        formData.append('endereco', endereco);
        formData.append('telefone_residencial', telefone_residencial);
        formData.append('celular', celular);
        formData.append('renda', renda);

        fetch('add_client.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            displayClients(); // Atualiza a lista de clientes
        })
        .catch(error => console.error('Erro:', error));
    }
}


function removeClient(id) {
    const formData = new FormData();
    formData.append('id', id);

    fetch('delete_client.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        displayClients(); // Atualiza a lista
    })
    .catch(error => console.error('Erro:', error));
}

function addClient() {
    const nome = prompt("Nome do Cliente:");
    const contato = prompt("Contato do Cliente:");

    if (nome && contato) {
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('contato', contato);

        fetch('add_client.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            displayClients(); // Atualiza a lista
        })
        .catch(error => console.error('Erro:', error));
    }
}

// Chama a função para exibir os clientes ao carregar a página
displayClients();

function displaySellers() {
    fetch('list_sellers.php')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('seller-list');
        list.innerHTML = ''; // Limpa a lista atual
        data.forEach(seller => {
            const listItem = document.createElement('li');
            listItem.textContent = `${seller.codigo} - Usuário: ${seller.usuario}`;
            listItem.innerHTML += ` <button onclick="removeSeller(${seller.id})">Remover</button>`;
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error('Erro:', error));
}

function addSeller() {
    const codigo = document.getElementById('seller-code').value;
    const usuario = document.getElementById('seller-user').value;

    const formData = new FormData();
    formData.append('codigo', codigo);
    formData.append('usuario', usuario);

    fetch('add_seller.php', { // Crie este arquivo para adicionar vendedores
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        displaySellers(); // Atualiza a lista de vendedores
    })
    .catch(error => console.error('Erro:', error));
}

function removeSeller(id) {
    const formData = new FormData();
    formData.append('id', id);

    fetch('delete_seller.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        displaySellers(); // Atualiza a lista
    })
    .catch(error => console.error('Erro:', error));
}




// Chama a função para exibir os vendedores ao carregar a página
function displayManufacturers() {
    fetch('list_manufacturers.php')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('manufacturer-list');
        list.innerHTML = ''; // Limpa a lista atual
        data.forEach(manufacturer => {
            const listItem = document.createElement('li');
            listItem.textContent = `${manufacturer.marca} - Contato: ${manufacturer.contato}`;
            listItem.innerHTML += ` <button onclick="removeManufacturer(${manufacturer.id})">Remover</button>`;
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error('Erro:', error));
}

function addManufacturer() {
    const cnpj = prompt("CNPJ da Montadora:");
    const razao_social = prompt("Razão Social:");
    const marca = prompt("Marca:");
    const contato = prompt("Contato:");
    const telefone_comercial = prompt("Telefone Comercial:");
    const celular = prompt("Celular:");

    if (cnpj && razao_social && marca && contato && telefone_comercial && celular) {
        const formData = new FormData();
        formData.append('cnpj', cnpj);
        formData.append('razao_social', razao_social);
        formData.append('marca', marca);
        formData.append('contato', contato);
        formData.append('telefone_comercial', telefone_comercial);
        formData.append('celular', celular);

        fetch('add_manufacturer.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            displayManufacturers(); // Atualiza a lista de montadoras
        })
        .catch(error => console.error('Erro:', error));
    }
}


function removeManufacturer(id) {
    const formData = new FormData();
    formData.append('id', id);

    fetch('delete_manufacturer.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        displayManufacturers(); // Atualiza a lista
    })
    .catch(error => console.error('Erro:', error));
}

function addManufacturer() {
    const nome = prompt("Nome da Montadora:");
    const pais = prompt("País da Montadora:");

    if (nome && pais) {
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('pais', pais);

        fetch('add_manufacturer.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            displayManufacturers(); // Atualiza a lista
        })
        .catch(error => console.error('Erro:', error));
    }
}

// Chama a função para exibir as montadoras ao carregar a página
displayManufacturers();

function displayOperations() {
    fetch('list_operations.php')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('operation-list');
        list.innerHTML = ''; // Limpa a lista atual
        data.forEach(operation => {
            const listItem = document.createElement('li');
            listItem.textContent = `Tipo: ${operation.tipo}, Cliente ID: ${operation.cliente_id}, Veículo ID: ${operation.veiculo_id}, Vendedor ID: ${operation.vendedor_id}, Valor: R$ ${operation.valor}`;
            listItem.innerHTML += ` <button onclick="removeOperation(${operation.id})">Remover</button>`;
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error('Erro:', error));
}

function addOperation() {
    const tipo = prompt("Tipo da Operação (compra/venda):");
    const cliente_id = prompt("ID do Cliente:");
    const veiculo_id = prompt("ID do Veículo:");
    const vendedor_id = prompt("ID do Vendedor:");
    const valor = prompt("Valor:");

    if (tipo && cliente_id && veiculo_id && vendedor_id && valor) {
        const formData = new FormData();
        formData.append('tipo', tipo);
        formData.append('cliente_id', cliente_id);
        formData.append('veiculo_id', veiculo_id);
        formData.append('vendedor_id', vendedor_id);
        formData.append('valor', valor);

        fetch('add_operation.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            displayOperations(); // Atualiza a lista de operações
        })
        .catch(error => console.error('Erro:', error));
    }
}


function removeOperation(id) {
    const formData = new FormData();
    formData.append('id', id);

    fetch('delete_operation.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        displayOperations(); // Atualiza a lista
    })
    .catch(error => console.error('Erro:', error));
}

function addOperation() {
    const tipo = prompt("Tipo da Operação (compra, venda, troca):");
    const cliente_id = prompt("ID do Cliente:");
    const veiculo_id = prompt("ID do Veículo:");
    const vendedor_id = prompt("ID do Vendedor:");

    if (tipo && cliente_id && veiculo_id && vendedor_id) {
        const formData = new FormData();
        formData.append('tipo', tipo);
        formData.append('cliente_id', cliente_id);
        formData.append('veiculo_id', veiculo_id);
        formData.append('vendedor_id', vendedor_id);

        fetch('add_operation.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            displayOperations(); // Atualiza a lista
        })
        .catch(error => console.error('Erro:', error));
    }
}

// Chama a função para exibir as operações ao carregar a página
displayOperations();

function addVehicle() {
    const chassi = document.getElementById('vehicle-chassis').value;
    const placa = document.getElementById('vehicle-plate').value;
    const marca = document.getElementById('vehicle-brand').value;
    const modelo = document.getElementById('vehicle-model').value;
    const anoFabricacao = document.getElementById('vehicle-year').value;
    const anoModelo = document.getElementById('vehicle-model-year').value;
    const cor = document.getElementById('vehicle-color').value;
    const valor = document.getElementById('vehicle-value').value;

    const formData = new FormData();
    formData.append('chassi', chassi);
    formData.append('placa', placa);
    formData.append('marca', marca);
    formData.append('modelo', modelo);
    formData.append('ano_fabricacao', anoFabricacao);
    formData.append('ano_modelo', anoModelo);
    formData.append('cor', cor);
    formData.append('valor', valor);

    fetch('add_vehicle.php', { // Crie este arquivo para adicionar veículos
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        displayVehicles(); // Atualiza a lista de veículos
    })
    .catch(error => console.error('Erro:', error));
}

function displayVehicles() {
    fetch('list_vehicles.php') // Crie este arquivo para listar veículos
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('vehicle-list');
        list.innerHTML = ''; // Limpa a lista atual
        data.forEach(vehicle => {
            const listItem = document.createElement('li');
            listItem.textContent = `Chassi: ${vehicle.chassi}, Placa: ${vehicle.placa}, Marca: ${vehicle.marca}, Modelo: ${vehicle.modelo}`;
            listItem.innerHTML += ` <button onclick="removeVehicle(${vehicle.id})">Remover</button>`;
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error('Erro:', error));
}
