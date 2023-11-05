import * as http from "http";
import VCLight from "vclight";
import router from "../src/app/router";

const app = new VCLight();
app.use(router);
const server = http.createServer();

server.on("request", VCLight.getHttpHandler(app));

server.listen(3000, () => {
    console.log("VCLight serve");
    console.log("> Ready! Available at http://localhost:3000");
});