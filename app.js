const app = require('express')();

app.get("/api", (req,res) => {
    res.json({ message : "api will ber served hrere"})
})
app.get("/", (req,res) => {
    res.json({ message : "home for api"})
})

app.get("/user", (req,res) => {
    res.json({ message : "Root User is here"})
})
app.get("/hello", (req,res) => {
    res.json({ message : "Hello Everyone !!!"})
})

app.listen(8000, ()=> { console.log("server running on port 8000")})