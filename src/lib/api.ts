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
  getProjects: () =>
    axiosInstance.get('/projects/').then(res => res.data),
  getProject: (id: string | number) =>
    axiosInstance.get(`/projects/${id}/`).then(res => res.data),
  getServices: () =>
    axiosInstance.get('/services/').then(res => res.data),
};

export default axiosInstance;
