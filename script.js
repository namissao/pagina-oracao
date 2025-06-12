
document.addEventListener('DOMContentLoaded', () => {
    const pedidos = [
        {
            titulo: "Projeto Escolas para o Futuro - Quênia",
            descricao: "Orem pela construção da nova sala de aula na escola de Kibera...",
            intercessores: 328
        },
        {
            titulo: "Missionária Juliana - Índia",
            descricao: "Orem pela saúde da missionária Juliana, que está se recuperando de dengue...",
            intercessores: 452
        }
    ];

    const container = document.getElementById('pedidos-container');
    pedidos.forEach((p, i) => {
        const div = document.createElement('div');
        div.className = 'pedido';
        div.innerHTML = `
            <h3>${p.titulo}</h3>
            <p>${p.descricao}</p>
            <small><img src="icons/bonequinho.svg" width="16" /> ${p.intercessores} orando</small><br />
            <button class="orar-btn" onclick="toggleOrar(this)">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 
                3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                11.54L12 21.35z"/></svg> Orar por este pedido
            </button>
        `;
        container.appendChild(div);
    });
});

function toggleOrar(btn) {
    btn.classList.toggle('clicked');
}
