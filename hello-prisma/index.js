const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hi I am Vedang Joshi");
});

app.listen(3030, () => {
    console.log('Server is running on port 3030')
});