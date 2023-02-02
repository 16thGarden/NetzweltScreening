const postrequests = {
    login: (req, res) => {
        const username = req.body.username
        const password = req.body.password
        
        var valid = false
        var response
        if (username == "foo" && password == "bar") {
            valid = true
            response = {
                username: "foo",
                displayName: "Foo Bar Foo",
                roles: [
                    "basic-user"
                ]
            }
        }

        if (valid) {
            req.session.username = response.username
            req.session.displayName = response.displayName
            req.session.roles = response.roles
        }
             
        res.status(200).send({
            success: valid,
            redirect: "/home/index"
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send({
            success: true,
            redirect: "/account/login"
        });
    }
}

module.exports = postrequests