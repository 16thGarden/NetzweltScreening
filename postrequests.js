const postrequests = {
    login: (req, res) => {
        const username = req.body.username
        const password = req.body.password
        
        var valid = false
        if (username == "foo" && password == "bar") {
            valid = true
        }

        res.status(200).send({
            success: valid
        })
    },

    logout: (req, res) => {

    }
}

module.exports = postrequests