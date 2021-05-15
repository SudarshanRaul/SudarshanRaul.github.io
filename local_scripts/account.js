function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    sessionStorage.setItem("profile", JSON.stringify(profile));
}

function getProfile() {
    var profileJson = sessionStorage.getItem("profile");
    if(profileJson) {
        var profile = JSON.parse(profileJson);
        return (profile);
    } else {
        return false;
    }
}

function bodyLoad () {
    if(getProfile()) {
        document.querySelectorAll(".account-sign-in")[0].style.display = 'none';
        document.querySelectorAll("#gUserName")[0].innerHTML = getProfile().getName();
        document.querySelectorAll("gUserImg")[0].src = getProfile().getImageUrl();
        document.querySelectorAll(".account-signed-in")[0].style.display = "block";
    } else {
        document.querySelectorAll(".account-sign-in")[0].style.display = 'block';
        document.querySelectorAll(".account-signed-in")[0].style.display = "none";
    }

}