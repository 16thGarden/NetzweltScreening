$(document).ready(function () {
    $("#submit").click(function() {
        $("#warning").html("")
        $("#username").css("border", "")
        $("#password").css("border", "")
        
        var username = $("#username").val()
        var password = $("#password").val()

        valid = true
        if (username == "") {
            $("#username").css("border", "solid 1px red")
            $("#warning").html("One or more fields missing!")
            valid = false
        }

        if (password == "") {
            $("#password").css("border", "solid 1px red")
            $("#warning").html("One or more fields missing!")
            valid = false
        }

        if (valid) {
            $.post("/login", {
                username: username,
                password: password
            }, function(data, status) {
                if (data.success) {
                    window.location = "/home"
                } else {
                    $("#warning").html("Incorrect username or password")
                }
            })
        }
    })
})