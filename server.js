const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Simple CORS - allow everything
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend is working!', timestamp: new Date() });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.post('/api/test', (req, res) => {
  res.json({ message: 'API endpoint working', data: req.body });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Test server running on port ${PORT}`);
});
