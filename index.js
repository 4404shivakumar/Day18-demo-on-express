const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
// process.env.PORT = PORT; // Set the PORT environment variable

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World from HTTP Server!');
});


// app.use('/', (req, res) => {
//     res.send('Welcome to the Home Page!');
// });


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});