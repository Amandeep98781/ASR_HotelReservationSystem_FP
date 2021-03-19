function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function showHideLink() {
    var username_cookie = getCookie("username");
    console.log("Cookie Name: " + username_cookie)

    var ctrlval = username_cookie != "" ? "none" : "inline-block";
    var contrls = document.getElementsByClassName("beforeLogin");

    console.log(contrls)
    for (let item of contrls) {
        item.style.display = ctrlval;
    }

     ctrlval = username_cookie == "" ? "none" : "inline-block";
     contrls = document.getElementsByClassName("afterLogin");

    for (let item of contrls) {
        item.style.display = ctrlval;
    }

}

function logout() {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    alert("you are loggedout successfully")
    window.location.assign("login.html");
}