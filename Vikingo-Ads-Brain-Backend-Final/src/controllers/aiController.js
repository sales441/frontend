export const suggest = (req, res) => {
  const { campaignId, brand, budget } = req.body || {};
  const suggestion = {
    campaignId: campaignId || 'camp-001',
    summary: 'Ajuste recomendado para aumentar CTR e reduzir ACOS.',
    keywordsToAdd: ['waxing kit', 'hard wax honey', 'sugar wax'],
    keywordsToPause: ['cheap wax', 'wax strips'],
    bidAdjustments: [{ keyword: 'waxing kit', change: '+15%' }, { keyword: 'wax strips', change: '-20%' }],
    explanation: 'Baseado em performance mock, aumentar bids em keywords de alta conversão e pausar termos de baixo ROI.'
  };
  return res.json({ success: true, suggestion });
};