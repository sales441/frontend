import express from 'express';
import { listCampaigns, listKeywords, applyBids } from '../controllers/adsController.js';
const router = express.Router();
router.get('/campaigns', listCampaigns);
router.get('/keywords/:campaignId', listKeywords);
router.post('/bids/apply', applyBids);
export default router;