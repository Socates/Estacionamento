// Simulação de resposta do Back-end
const fetchParkingData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nome: "Estacionamento Subsolo",
                lat: -22.85397,
                lng: -47.09857
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
            //const url = `https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lng}`;
            const url = ` https://maps.app.goo.gl/yJN4cfMQLPFqoPRbA`;
           
            window.open(url, '_blank');
        });

    } catch (error) {
        cardElement.innerHTML = "<p>Erro ao carregar localização.</p>";
    }
};

// Inicializa a aplicação

renderCard();



