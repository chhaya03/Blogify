# 📝 Blogify

A full-stack blogging application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Users can sign in, create and view blog posts, and upload images. Authentication is implemented using **JSON Web Tokens (JWT)** and **cookies**.

---

## 🌐 Features

✅ User Authentication (Sign In)  
✅ Create and View Blogs  
✅ Upload cover images  
✅ Dynamic home page listing all blogs  
✅ JWT-based authentication stored in cookies  
✅ Role-based access (USER, ADMIN — placeholder for now)  

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Templating Engine**: EJS
- **Authentication**: JWT (jsonwebtoken), cookie-parser
- **File Uploads**: Multer (configured separately, assumed but not shown here)
- **Styling**: Bootstrap (via public folder)

---

## 🔧 Project Structure

├── app.js<br>
├── .env<br>
├── routers/<br>
│ ├── user.js<br>
│ └── blog.js<br>
├── middleware/<br>
│ └── authentication.js<br>
├── models/<br>
│ ├── blog.js<br>
│ └── user.js<br>
├── services/<br>
│ └── authentication.js<br>
├── views/<br>
│ ├── home.ejs<br>
│ ├── createBlog.ejs<br>
│ ├── signin.ejs<br>
│ └── partials/<br>
│ ├── head.ejs<br>
│ ├── nav.ejs<br>
│ └── scripts.js<br>
└── public/<br>
└── (static files like images, CSS)
