import http from 'http';
import app from './app.js';


let server = http.createServer(app)

server.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000');
});