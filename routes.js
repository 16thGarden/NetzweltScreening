const routes = {
    home: (req, res) => {
        if (req.session.username) {
            res.render("home", {
                title: "Home Page",
                displayName: req.session.displayName
            })
        } else {
            res.redirect("/account/login")
        }
    },
    
    login: (req, res) => {
        if (req.session.username) {
            res.redirect("/home/index")
        } else {
            res.render("login", {
                title: "Login Page"
            })
        }
    },
}

module.exports = routes