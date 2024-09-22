const express = require('express');
const { renderPage } = require('vite-plugin-ssr/server'); 
const path = require('path');

const app = express();

// Serve static assets from the 'dist' folder (which is generated when you build)
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all incoming requests
app.get('*', async (req, res) => {
  const pageContext = await renderPage({ url: req.originalUrl });  // Pre-render the requested page
  const { httpResponse } = pageContext;
  if (httpResponse) {
    res.status(httpResponse.statusCode).send(httpResponse.body);  // Send the pre-rendered HTML
  } else {
    res.status(404).send('Page not found');
  }
});

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
