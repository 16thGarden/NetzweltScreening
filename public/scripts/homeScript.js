$(document).ready(function () {
    $("#logout").click(function() {
        $.post("/account/logout", {}, function(data, status) {
            if (data.success) {
                window.location = data.redirect
            }
        }) 
    })

    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
})