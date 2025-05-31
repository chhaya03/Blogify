require('dotenv').config()
const express = require("express");
const path = require("path");
const userRoute = require('./routers/user');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const { checkForAuthenticationCookie } = require("./middleware/authentication");
const blogRoute = require('./routers/blog')
const Blog = require('./models/blog')



const app = express();
// const PORT = 8000;  this was for only my server 
const PORT = process.env.PORT || 8000; // this is for deployment this is custom port

// mongoose.connect('mongodb://127.0.0.1:27017/Blogify').then(e=>console.log("mongodb connected")); //database connected

mongoose.connect(process.env.MONGO_URL).then(e=>console.log("mongodb connected")); //custom databasw for deployement
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));



app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (req,res)=>{
const allBlogs = await Blog.find({})

  res.render("home",{
    user: req.user,
    blogs : allBlogs
  })
});

app.use('/user',userRoute)
app.use('/blog',blogRoute)



app.listen(PORT,()=>console.log(`Server started ${PORT}`))