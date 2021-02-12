const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`api is running`);
})

app.listen(3000, () => {
    console.log(`server running on port 3000`);
})