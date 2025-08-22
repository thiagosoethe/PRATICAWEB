function validaProc() {
    clientes = [];

    for (let i = 1; i <= 3; i++) {
        const nome = document.getElementById(`cliente${i}Nome`).value;
        const compras = [
            parseFloat(document.getElementById(`cliente${i}Mes1`).value),
            parseFloat(document.getElementById(`cliente${i}Mes2`).value),
            parseFloat(document.getElementById(`cliente${i}Mes3`).value)
        ];

        const comprasValidas = compras.filter(compra => compra > 0);
        const qtdeCompras = comprasValidas.length;
        const totalCompras = comprasValidas.reduce((sum, current) => sum + current, 0);
        const mediaCompras = qtdeCompras > 0 ? totalCompras / qtdeCompras : 0;
        
        clientes.push({
            nome: nome,
            compras: compras,
            qtdeCompras: qtdeCompras,
            mediaCompras: mediaCompras
        });
    }

    exibirMenu();
    return false;
}

function exibirMenu() {
    const saidaDiv = document.getElementById('saida');
    saidaDiv.innerHTML = `
        <h3>Escolha uma opção:</h3>
        <div id="menu-opcoes">
            <button onclick="verComprasCliente()">Ver compras de um cliente</button>
            <button onclick="verTodasAsCompras()">Ver todas as compras de todos os clientes</button>
        </div>
    `;
}

function verComprasCliente() {
    const nomeBusca = prompt("Digite o nome do cliente:");
    const clienteEncontrado = clientes.find(c => c.nome.toLowerCase() === nomeBusca.toLowerCase());

    if (clienteEncontrado) {
        const saidaDiv = document.getElementById('saida');
        saidaDiv.innerHTML = `
            <h3>Informações do Cliente: ${clienteEncontrado.nome}</h3>
            <p><strong>Compras nos últimos 3 meses:</strong> R$ ${clienteEncontrado.compras[0].toFixed(2)}, R$ ${clienteEncontrado.compras[1].toFixed(2)}, R$ ${clienteEncontrado.compras[2].toFixed(2)}</p>
            <p><strong>Média de compras:</strong> R$ ${clienteEncontrado.mediaCompras.toFixed(2)}</p>
            <p><strong>Quantidade de compras:</strong> ${clienteEncontrado.qtdeCompras}</p>
            <button onclick="exibirMenu()">Voltar ao Menu</button>
        `;
    } else {
        alert("Cliente não encontrado.");
    }
}

function verTodasAsCompras() {
    const saidaDiv = document.getElementById('saida');
    let tabelaHTML = `
        <h3>Tabela de Compras</h3>
        <table>
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Mês 1</th>
                    <th>Mês 2</th>
                    <th>Mês 3</th>
                    <th>Média Compras</th>
                    <th>Qtde Compras</th>
                </tr>
            </thead>
            <tbody>
    `;

    clientes.forEach(cliente => {
        tabelaHTML += `
            <tr>
                <td>${cliente.nome}</td>
                <td>R$ ${cliente.compras[0].toFixed(2)}</td>
                <td>R$ ${cliente.compras[1].toFixed(2)}</td>
                <td>R$ ${cliente.compras[2].toFixed(2)}</td>
                <td>R$ ${cliente.mediaCompras.toFixed(2)}</td>
                <td>${cliente.qtdeCompras}</td>
            </tr>
        `;
    });

    tabelaHTML += `
            </tbody>
        </table>
        <br><button onclick="exibirMenu()">Voltar ao Menu</button>
    `;
    saidaDiv.innerHTML = tabelaHTML;
}