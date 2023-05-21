const express = require('express');

const app = express();

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect(`https://${req.hostname}${req.originalUrl}`);
  } else {
    next();
  }
});

module.exports = app;
