const axios = require('axios')

const getData = async (url) => {
    try {
        /*
        const response = await axios.get(url)
        const data = response.data
        console.log(data)*/

        return await axios.get(url)
    } catch (error) {
        console.log(error)
    }
}

const firstPart = (name) => {
    return '<li><span class="caret">' + name + '</span><ul class="nested">'
}

const lastPart = () => {
    return '</ul></li>'
}

const noChildren = (name) => {
    return '<li>' + name + '</li>'
}

const buildHTML = (data, index) => {
    //console.log("parent this iteration: " + data[index].name)
    var children = []
    for (var i = 0; i < data.length; i++) {
        if (data[index].id == data[i].parent) {
            children.push(i)
            //console.log("child of " + data[index].id, data[index].name, data[index].parent + " found: " + data[i].id, data[i].name, data[i].parent)
        }
    }
    console.log("children found: " + children)

    if (children.length == 0) {
        //console.log("no children for " + data[index].id, data[index].name, data[index].parent)
        return noChildren(data[index].name)
    }

    var html = ""
    html += firstPart(data[index].name)
    for (var i = 0; i < children.length; i++) {
        html += buildHTML(data, children[i])
    }
    html += lastPart()

    return html
}

const routes = {
    home: (req, res) => {
        if (req.session.username) {
            getData("https://netzwelt-devtest.azurewebsites.net/Territories/All").then(result => {
                const data = result.data.data
                var territoriesHTML = ""
                for (var i = 0; i < data.length; i++) {
                    if (data[i].parent == null) {
                        console.log(data[i].name, data[i].parent)
                        territoriesHTML += buildHTML(data, i)
                    }
                }
                console.log(territoriesHTML)
                res.render("home", {
                    title: "Home Page",
                    displayName: req.session.displayName,
                    territoriesHTML: territoriesHTML
                })
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