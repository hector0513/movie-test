import express from "express"
import cors from "cors"
import router from "./routes"
const app =express()
app.set("port",process.env.PORT||3000)
app.use(express.json())
app.use(cors());

app.use("/api",router)
app.all('/*', (req : any, res : any, next : any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
export default app