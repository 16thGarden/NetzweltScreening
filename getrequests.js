const getrequests = {
    test: (req, res) => {
        res.status(200).send({
            test: "this is a test"
        })
    }
}

module.exports = getrequests