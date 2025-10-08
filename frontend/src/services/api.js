import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api' });
export const login = (payload) => API.post('/auth/login', payload);
export const runAISuggest = (payload) => API.post('/ai/suggest', payload);
export const getCampaigns = () => API.get('/ads/campaigns');
export const getKeywords = (campaignId) => API.get(`/ads/keywords/${campaignId}`);
export const applyBids = (adjustments) => API.post('/ads/bids/apply', { adjustments });
