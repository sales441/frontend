-import axios from 'axios';
+import API from '../services/api';

-const res = await axios.post('http://localhost:5000/api/ai/suggest', { brand: 'Depil Bella' });
+const res = await API.post('/ai/suggest', { brand: 'Depil Bella' });
