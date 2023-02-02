$(document).ready(function () {
    $("#logout").click(function() {
        $.post("/account/logout", {}, function(data, status) {
            if (data.success) {
                window.location = data.redirect
            }
        }) 
    })
})