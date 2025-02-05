import http from 'http';
import app from './app.js';


let server = http.createServer(app)
let PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log('Server is running on port http://localhost:'+PORT);
});