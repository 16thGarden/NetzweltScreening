const postrequests = {
    login: (req, res) => {
        const username = req.body.username
        const password = req.body.password
        
        res.status(200).send({
            test: "this is a test"
        })
    },

    logout: (req, res) => {
        
    }
}

module.exports = postrequests