const app = require('express')();

app.get("/api", (req,res) => {
    res.json({ message : "api will ber served hrere"})
})
app.get("/", (req,res) => {
    res.json({ message : "home for api"})
})

app.listen(8000, ()=> { console.log("server running on port 8000")})