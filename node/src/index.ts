import app from "./app"
app.listen(app.get("port"),()=>{
    console.log(`se a inicializado en el puerto ${app.get("port")}`)
})