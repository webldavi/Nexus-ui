import components from "./components";
export default {
    install(app:any){
        components.forEach(c=>{
            app.component(c.name, c.component)
        })
    }
}