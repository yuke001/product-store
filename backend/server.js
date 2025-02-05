import http from 'http';
import app from './app.js';
import connectDB from './config/db.js';


let server = http.createServer(app)

server.listen(5000, () => {
    connectDB();
    console.log('Server is running on port http://localhost:5000');
});