function validate_comp()
{
    let username = document.getElementById('txtUsername').value.trim();
    let password = document.getElementById('txtPassword').value;
    let errorDiv = document.getElementById('errordiv');
    let message = document.getElementById('message');
    if (!username)
    {
        errorDiv.style.display = "block";
        message.innerHTML = "Username cannot be left blank!";
        return false;
    }
    if (!password)
    {
        errorDiv.style.display = "block";
        message.innerHTML = "Password cannot be left blank!";
        return false;
    }
    return true;
}