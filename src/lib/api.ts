import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'https://ilariadiliberto.com/api';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.defaults.xsrfCookieName = 'csrftoken';
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken';

// ─── Typed API methods ─────────────────────────────────────────────────────────

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // honeypot
}

export const api = {
  sendContactMessage: (data: ContactPayload) =>
    axiosInstance.post('/contact/', data),
};

export default axiosInstance;
