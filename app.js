const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

const mainRouter = require("./routes/main");


app.use("/", mainRouter);

app.listen(process.env.PORT || 3000, () => {

    console.log('server running in port 3000')

})

app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

