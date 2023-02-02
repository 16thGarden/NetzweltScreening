const { envPort } = require("./config.js");
const { envSessionKey } = require("./config.js");

const express = require("express")
const path = require("path")
const exphandle = require("express-handlebars")
const handlebars = require("handlebars")
const bodyParser = require("body-parser")
const session = require("express-session")

const router = express.Router()

const app = express();
const port = envPort || 9000

app.engine("hbs", exphandle.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "/views/layouts"), // Layouts folder
    partialsDir: path.join(__dirname, "/views/partials"), // Partials folder
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))

app.set("view engine", "hbs")

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: envSessionKey || "secret",
    resave: false,
    saveUninitialized: false	
}));

const server = app.listen(port, function() {
    console.log("App listening at port "  + port);
    //database.connect();
});

/* ---------------------------------------- ROUTES ---------------------------------------- */
const routes = require("./routes.js")
app.get("/", (req, res) => {
    res.redirect("/home/index")
})
app.get("/account/login", routes.login)
app.get("/home/index", routes.home)

/* ------------------------------------- POST REQUESTS ------------------------------------ */
const postrequests = require("./postrequests.js")
app.post("/account/login", postrequests.login)
app.post("/account/logout", postrequests.logout)

/* -------------------------------------- GET REQUESTS ------------------------------------ */
const getrequests = require("./getrequests.js")
app.get("/test", getrequests.test)