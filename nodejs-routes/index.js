const express = require('express');
const app = express();
const fs = require('fs');
const FILE_PATH = 'URL_logger.txt';
const port = 3000;


// fs.writeFile('URL_logger.txt', lyrics, (err) => {
//     if (err) throw err;
//     console.log('Lyric saved!');
// });
// fs.appendFile('URL_logger.txt', '\nRight there up on Broadway', (err) => {
//     if (err) throw err;
//     console.log('The lyrics were updated!');
// });
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`) 
    next()
 })


app.use('/about-us', function(req, res, next) {
    next();
});

app.get('/', (req, res) => 
res.send('<h1>Welcome</h1>')
);

app.get('/about-us', (req, res) => res.send('<h1>About us</h1>'));
app.get('*', (req, res) => res.send('<h1>404</h1>'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));