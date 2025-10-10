# ⚔️ Vikingo Ads Brain™ – Backend Final
Servidor backend completo pronto para deploy na Railway.

## 🚀 Rodar localmente
cd backend
npm install
npm run dev

API em: http://localhost:5000

## 🌐 Deploy na Railway
1. Crie um novo projeto em https://railway.app
2. Faça upload do arquivo ZIP
3. Defina as variáveis no `.env` conforme o `.env.example`
4. Porta padrão: 5000

Rotas principais:
- POST /api/auth/login
- POST /api/ai/suggest
- GET  /api/ads/campaigns
- GET  /api/ads/keywords/:campaignId
- POST /api/ads/bids/apply
