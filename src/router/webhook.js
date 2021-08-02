const { Router } = require("express");

const app = Router();

app.post('/', (req, res, next) => {
    console.log(req.body);
    res.end();
 });

 module.exports= app;