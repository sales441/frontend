-import axios from 'axios';
+import API from '../services/api';

-const r = await axios.get('http://localhost:5000/api/ads/campaigns');
+const r = await API.get('/ads/campaigns');

-const res = await axios.get('http://localhost:5000/api/ads/keywords/' + id);
+const res = await API.get('/ads/keywords/' + id);

-await axios.post('http://localhost:5000/api/ads/bids/apply', { adjustments: [...] });
+await API.post('/ads/bids/apply', { adjustments: [...] });
