const express = require ('express');
const path = require('path');
const app = express();
const morgan = require('morgan');


const port = process.env.PORT || 4000;
app.use(morgan());
app.use('/song/:songId', express.static(path.resolve(__dirname, '../client')));
app.listen(port, ()=> console.log(`Listening on port ${port}`));

