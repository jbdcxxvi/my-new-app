const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

console.log(path.join(__dirname, 'dist'));
// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Route all other requests to React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
