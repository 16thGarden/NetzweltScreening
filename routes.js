const routes = {
    login: (req, res) => {
        res.render("login", {
            title: "Login Page"
        })
    }
}

module.exports = routes