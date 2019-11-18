const express = require("express");
const path = require("path");
const art_express = require("express-art-template");

const app = express();

app.use(express.static(path.join(__dirname,"public")));
//设置template模板引擎
app.engine("art",   art_express);
app.get("/user/list", (req,res)=> {
    res.render("userlist.art",{
        title:"hi!"
    })
})


app.listen(8080,()=> {
    console.log('app is running in http://172.20.56.169:8080');
})