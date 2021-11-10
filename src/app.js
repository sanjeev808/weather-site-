const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3080;

//public static path
console.log(path.join(__dirname, "../template/partials"))
const temp_Path=path.join(__dirname, "../template/views")
const partials_path=path.join(__dirname, "../template/partials")
const static_path = (path.join(__dirname, "../public"))


app.set('view engine' , 'hbs');
app.set('views',temp_Path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));


//routing
app.get("" , (req,res) =>
{
    res.render("index");
})
app.get("/about" , (req,res) =>
{
    res.render('about');
})
app.get("/weather" , (req,res) =>
{
    res.render('weather')
})
app.get("*" , (req,res) =>
{
    res.render('404' , {
        errorMassage : 'oops! Page not found'
    });
})
app.listen(port , ()=>{
    console.log(`listen sever ${port}`);
})