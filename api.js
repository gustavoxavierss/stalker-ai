// Configurações da API
const API_CONFIG = {
    host: 'instagram-looter2.p.rapidapi.com',
    key: 'e3cd2d0d2fmsh0dced0acd30a539p1c7338jsn42c4ecbbcca6'
};

// Função global para buscar os dados
window.buscarDadosInstagram = async (username) => {
    try {
        const response = await fetch(`https://${API_CONFIG.host}/profile2?username=${username.trim().replace('@', '')}`, {
            headers: {
                'x-rapidapi-host': API_CONFIG.host,
                'x-rapidapi-key': API_CONFIG.key
            }
        });
        
        if (!response.ok) throw new Error("Erro na rede");
        
        const data = await response.json();
        
        // Verifica se o usuário existe no retorno da API
        if (data && (data.id || data.pk)) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Erro na API:", error);
        return null;
    }
};
