const axios = require('axios')

const postrequests = {
    login: (req, res) => {
        const username = req.body.username
        const password = req.body.password

        axios.post('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
            username: username,
            password: password
        }).then((response) => {
            const data = response.data
            req.session.username = data.username
            req.session.displayName = data.displayName
            req.session.roles = data.roles

            res.status(200).send({
                success: true,
                redirect: "/home/index"
            })
        }).catch((error) => {
            res.send({
                success: false,
            })
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