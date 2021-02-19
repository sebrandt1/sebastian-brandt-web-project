const url = "https://catfact.ninja/fact";
const CLIENT_ID = "201551229723-hv19qdfaf6tstadb3p5q9qfu0nfr84nf.apps.googleusercontent.com";
var googleName = "";

async function fetchRandomFact() {
    await fetch(url)
        .then(response => 
            response.json())
        .then(json => 
            document.getElementById('fact').innerHTML = json.fact);
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    googleName = profile.getGivenName();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
}

function displayGoogleName() {
    document.getElementById('welcomemsg').innerHTML = googleName;
}