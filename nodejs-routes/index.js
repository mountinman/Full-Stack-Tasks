const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

let lyrics = 'Hello World';

fs.writeFile('URL_logger.txt', lyrics, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});

app.get('/', (req, res) => res.send('<h1>Welcome</h1>'));
app.get('/about-us', (req, res) => res.send('<h1>About us</h1>'));
app.get('*', (req, res) => res.send('<h1>404</h1>'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));