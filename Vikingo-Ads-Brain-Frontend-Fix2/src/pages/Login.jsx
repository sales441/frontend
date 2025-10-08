-import axios from 'axios';
+import API from '../services/api';

-const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
+const res = await API.post('/auth/login', { email, password });
