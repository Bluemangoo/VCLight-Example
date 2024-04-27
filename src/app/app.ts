import VCLight from "vclight";
import router from "./router";

const app = new VCLight();
app.use(router);
export default app;
