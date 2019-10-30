const express = require('express');
const app = express();
const fs = require('fs');


const port = 3000

app.get('/', (req, res) => res.send('<h1>Welcome</h1>'));
app.get('/about-us', (req, res) => res.send('<h1>About us</h1>'))
app.get('*', (req, res) => res.send('<h1>404</h1>'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))