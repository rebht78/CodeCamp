function validate_comp()
{
    let username = document.getElementById('txtUsername').value.trim();
    let password = document.getElementById('txtPassword').value;
    
    if (!username)
    {
        showErrorMessage("Username cannot be left blank!");
        return false;
    }
    if (!password)
    {
        showErrorMessage("Password cannot be left blank!");
        return false;
    }
    return true;
}
function validate_compare()
{
    if (validate_comp())
    {
        let password = document.getElementById('txtPassword').value;
        let confirmPassword = document.getElementById('txtConfirmPassword').value;

        if (password !== confirmPassword)
        {
            showErrorMessage("Password and Confirm Pasword should match!");
            return false;
        }
        else
        {
            return true;
        }
    }
    return false;
}
function showErrorMessage(msg)
{
    let errorDiv = document.getElementById('errordiv');
    errorDiv.style.display = "block";
    let message = document.getElementById('message');

    message.innerHTML = msg;
}