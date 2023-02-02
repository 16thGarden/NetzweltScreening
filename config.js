const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    envPort: process.env.PORT,
    envSessionKey: process.env.SESSION_SECRET,
}