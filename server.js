const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Application Tier API!' });
});

app.listen(port, () => {
  console.log(`Application Tier is running at http://localhost:${port}`);
});

