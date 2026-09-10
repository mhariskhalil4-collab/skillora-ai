import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/features/auth/store/auth.store';

// Base API configuration referencing the approved architecture
const API_BASE_URL = 'https://api.skillora.ai/v1';

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // 15 seconds timeout for LLM generation routes
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// --- REQUEST INTERCEPTOR: Inject Bearer Token ---
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// --- RESPONSE INTERCEPTOR: Global Error Handling ---
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const statusCode = error.response ? error.response.status : null;

    if (statusCode === 401) {
      // Unauthorized: Clear local session and redirect to login
      useAuthStore.getState().logout();
      if (window.location.pathname !== '/auth/login') {
        window.location.href = '/auth/login';
      }
    } else if (statusCode === 429) {
      // Rate Limit Exceeded
      console.warn("Rate limit exceeded. Please slow down your requests.");
    } else if (statusCode && statusCode >= 500) {
      // Server Error
      console.error("Server error encountered. Please try again later.", error.message);
    }

    return Promise.reject(error);
  }
);
