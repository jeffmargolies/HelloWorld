const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<h1>Hello Jeff</h1><p>${new Date().toString()}</p>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
