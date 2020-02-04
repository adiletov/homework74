const express = require('express');
const app = express();
const messages = require('./messege');
const port = 8080;
app.use(express.json());
app.use('/messages', messages);

app.listen(port);
