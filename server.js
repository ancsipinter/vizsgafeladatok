const http = require('http');


const server = http.createServer((req, res) => {
    // Beállítjuk a státuszkódot 200-ra
    res.statusCode = 200;
    // Beállítjuk a válasz fejlécét
    res.setHeader('Content-Type', 'text/plain');

    // Válasz küldése az oldalra
    res.end('Vizsga szerver\n');
});

server.listen(port, hostname, () => { 
   
});
const http = require('http');



// A szerver figyeljen a 127.0.0.1 IP címen, a 8080-as porton
const port = 8080;
const ip = '127.0.0.1';
server.listen(port, ip, () => {
    // Kiírjuk a konzolra, hogy a szerver működik
    console.log(`A szerver működik a http://${ip}:${port}/ címen`);
});
