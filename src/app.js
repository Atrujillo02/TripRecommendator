const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5173;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, '../public')));

 
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/test', (req, res) => {
    res.json({ message: 'The Express server is up and running!' });
  });
}

app.listen(PORT, () => {
  console.log(`Server running on en http://localhost:${PORT}`);
});
