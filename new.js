<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Static Page</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <h1>Welcome to My Static Page!</h1>
    <img src="/images/logo.png" alt="Logo" width="200">
    <p>This is served with Express.</p>
  </body>
</html>

body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});


