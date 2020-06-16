const express = require('express');
const app = express();
const port = 3000;
const index = require('./src/controllers/IndexController.js');

app.use(express.static('public'));
app.use('/', index);

app.listen(port, () => {
    console.log(`LIVE ON 3000`);
});
