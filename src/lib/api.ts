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
  /** Composto dal form unendo direzione e budget. */
  subject: string;
  /** Corpo esteso: azienda, presenza online, direzione, budget, obiettivo. */
  message: string;
  /** Honeypot antispam — raccolto dal form ma non ancora trasmesso (voce 6.4). */
  website?: string;
}

export const api = {
  sendContactMessage: (data: ContactPayload) =>
    axiosInstance.post('/contacts/', data),
};

export default axiosInstance;
