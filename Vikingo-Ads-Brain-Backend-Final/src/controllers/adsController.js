export const listCampaigns = (req, res) => {
  const campaigns = [
    { id: 'camp-001', name: 'Depil Bella - Awareness', budget: 150, status: 'enabled', impressions: 12000, clicks: 420, acos: 18.5 },
    { id: 'camp-002', name: 'Dub Boyz - Snow Many', budget: 90, status: 'paused', impressions: 5000, clicks: 110, acos: 22.1 }
  ];
  return res.json({ success: true, campaigns });
};
export const listKeywords = (req, res) => {
  const { campaignId } = req.params;
  const keywords = [
    { id: 'k-1', text: 'waxing kit', bids: 1.25, ctr: 3.2, acos: 12.5 },
    { id: 'k-2', text: 'hard wax honey', bids: 2.15, ctr: 4.1, acos: 9.8 },
    { id: 'k-3', text: 'wax strips', bids: 0.85, ctr: 1.1, acos: 45.2 }
  ];
  return res.json({ success: true, campaignId, keywords });
};
export const applyBids = (req, res) => {
  const { adjustments } = req.body;
  return res.json({ success: true, applied: adjustments, message: 'Ajustes aplicados (mock).' });
};