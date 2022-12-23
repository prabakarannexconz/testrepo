const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {


    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
            JSON.stringify({
                data: 'hello world'
            })
        )
    }
    else if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(
            JSON.stringify({
                data: 'home page'
            })
        )
    }



    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('page not found');
        res.end()
    }
})

console.log(`server running at http://localhost:${PORT}`);
server.listen(PORT)
