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
  company: string;
  onlinePresence: string;
  direction: string;
  objective: string;
  budget: string;
  website?: string; // honeypot
}

export const api = {
  sendContactMessage: (data: ContactPayload) =>
    axiosInstance.post('/contacts/', data),
  getProjects: () =>
    axiosInstance.get('/projects/').then(res => res.data),
  getProject: (id: string | number) =>
    axiosInstance.get(`/projects/${id}/`).then(res => res.data),
  getServices: () =>
    axiosInstance.get('/services/').then(res => res.data),
  getAbout: () =>
    axiosInstance.get('/about/').then(res => res.data),
  getBlogPosts: () =>
    axiosInstance.get('/blog/').then(res => res.data),
  getFaqs: () =>
    axiosInstance.get('/faqs/').then(res => res.data),
};

export default axiosInstance;
