const express=require("express")
const app=express()
const hbs=require("hbs")
const path=require("path")
const bodyParser =require("body-parser")
const session=require("express-session")
const partialpath=path.join(__dirname,'/partials')
console.log(path.join(__dirname,'/partials'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
hbs.registerPartials(partialpath)
app.set("view engine",'hbs')
app.use(session({
    secret:" kes",
    resave:false ,
    saveUninitialized:true
}))
const user={email:"keshav@gmail.com",
password:123456
}

app.use("/static",express.static(path.join(__dirname,'public')))
app.get("/",(req,res)=>{
    res.render("index")

})

app.post("/login",(req,res)=>{
    if(req.body.email==user.email&&req.body.password==user.password)
    {req.session.user=req.body.email
        res.redirect("/logout")
    }else{
    res.end("please enter correct detail")
    }
})
app.get("/logout",(req,res)=>
   {
 res.render("header")}
   
   

 

)


app.listen(3000,()=>{

    console.log("connection establish")
})