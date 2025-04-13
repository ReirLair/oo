const express = require('express');
const path = require('path');

const app = express();
const port = 7860;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, 'offline-games-hub')));

// Serve index.html for all routes (Single Page App behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'offline-games-hub', 'index.html'));
});

app.listen(port, () => {
  console.log(`Offline Games Hub is running at http://localhost:${port}`);
});
