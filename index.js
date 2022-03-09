const http = require("http");
const app = require("./app");

const port = 3000 || process.env.PORT;

console.log(__dirname);
console.log(__filename);

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log("Server is running on port "+ port);
});