const express = require('express')
const app = express();
const port = 2021;
const router = require('./src/router/webhook');

/* accept json body*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* add the router */
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}`));