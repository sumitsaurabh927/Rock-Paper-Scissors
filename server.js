const http = require('http');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
   const page = url.parse(req.url).pathname;

   if(page == '/') {
      fs.readFile('index.html', (err, data) => {
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data)
         res.end();
      })
   }

   else {
      figlet('404!!', (err, data) => {
         if(err) {
            console.log('Something went wrong...')
            console.log(err);
            return;
         }
         res.write(data)
         res.end()
      })
      }
})

server.listen(8000)