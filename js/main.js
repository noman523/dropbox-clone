function switchVisible() {
    if (document.getElementById('div1')) {

        if (document.getElementById('div1').style.display == 'none') {
            document.getElementById('div1').style.display = 'block';
            document.getElementById('div2').style.display = 'none';
            document.getElementById('headertext').innerHTML = "Sign In";
            document.getElementById('login0rsignin').innerHTML = "Create an account";
        }
        else {
            document.getElementById('div1').style.display = 'none';
            document.getElementById('div2').style.display = 'block';
            document.getElementById('headertext').innerHTML = "Create an account";
            document.getElementById('login0rsignin').innerHTML = "Log in";
        }
    }
}
