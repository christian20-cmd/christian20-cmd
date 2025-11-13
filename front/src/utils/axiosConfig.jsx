import axios from 'axios';

// Configuration de base d'axios
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 30000, // Augmenté le timeout
});

// Intercepteur pour ajouter le token automatiquement
api.interceptors.request.use(
  (config) => {
    // 🔥 CORRECTION : Chercher dans tous les storage possibles
    const token = localStorage.getItem('auth_token') || 
                  localStorage.getItem('token') ||
                  sessionStorage.getItem('auth_token') ||
                  sessionStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('🔐 Token ajouté aux headers:', token.substring(0, 20) + '...');
    } else {
      console.warn('⚠️ Aucun token trouvé pour la requête API');
    }
    
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    
    return config;
  },
  (error) => {
    console.error('❌ Erreur intercepteur request:', error);
    return Promise.reject(error);
  }
);

// Intercepteur de réponse pour mieux gérer les erreurs
api.interceptors.response.use(
  (response) => {
    console.log('✅ Réponse API reçue:', {
      url: response.config.url,
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('❌ Erreur API:', {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message,
      response: error.response?.data
    });
    
    return Promise.reject(error);
  }
);

export default api;