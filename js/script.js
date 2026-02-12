// Simulação de resposta do Back-end
const fetchParkingData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nome: "Estacionamento VIP",
                lat: -23.550520,
                lng: -46.633308
            });
        }, 1500);
    });
};

const renderCard = async () => {
    const cardElement = document.getElementById('card');
    
    try {
        const data = await fetchParkingData();
        
        // Injetando o conteúdo após a "resposta" do back-end
        cardElement.innerHTML = `
            <h1>${data.nome}</h1>
            <button class="btn-go" id="btnSiga">SIGA</button>
        `;

        // Evento de clique para o Google Maps
        document.getElementById('btnSiga').addEventListener('click', () => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lng}`;
            window.open(url, '_blank');
        });

    } catch (error) {
        cardElement.innerHTML = "<p>Erro ao carregar localização.</p>";
    }
};

// Inicializa a aplicação
renderCard();