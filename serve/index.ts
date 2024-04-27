import * as http from "http";
import app from "../src/app/app";

const server = http.createServer();

server.on("request", app.httpHandler);

server.listen(3000, () => {
    console.log("VCLight serve");
    console.log("> Ready! Available at http://localhost:3000");
});