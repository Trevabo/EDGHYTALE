// Função para copiar IP do servidor
function copiarIP() {
    const ip = "sp-36.raze.host:25668";
    navigator.clipboard.writeText(ip).then(() => {
        alert("IP copiado para a área de transferência: " + ip);
    }).catch(err => {
        console.error('Erro ao copiar IP:', err);
        // Fallback para navegadores antigos
        const textArea = document.createElement('textarea');
        textArea.value = ip;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert("IP copiado!");
    });
}

// Atualizar status do servidor (simulado)
function atualizarStatus() {
    // Em uma implementação real, aqui viria uma chamada à API do servidor
    const players = Math.floor(Math.random() * 100);
    document.querySelector('.online-count').textContent = `${players}/100`;
    document.querySelector('.progress-fill').style.width = `${players}%`;
    
    // Simular staff online
    const staffMembers = ['Admin_Player', 'Mod_Helper', 'Builder_Pro'];
    const randomStaff = staffMembers.slice(0, Math.floor(Math.random() * 3) + 1);
    
    const staffList = document.querySelector('.staff-list');
    if (staffList) {
        staffList.innerHTML = randomStaff.map(staff => `<li>${staff}</li>`).join('');
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar status a cada 30 segundos
    atualizarStatus();
    setInterval(atualizarStatus, 30000);
    
    // Adicionar data atual aos comunicados
    const today = new Date();
    const dateString = today.toLocaleDateString('pt-BR');
    document.querySelectorAll('.data')[0].textContent = dateString;
});
