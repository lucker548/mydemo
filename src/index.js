"use strict";
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    let lol = 'Hello fufels!';
    res.send(lol);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
