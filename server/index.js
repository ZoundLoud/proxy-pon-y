const express = require ('express');
const path = require('path');
const app = express();



const port = 8081;

app.use(express.static(path.resolve(__dirname, '../client')));
app.use('/song/:songId', express.static(path.resolve(__dirname, '../client')));
app.listen(port, ()=> console.log(`Listening on port ${port}`));

