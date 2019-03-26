function LoginLoader()
{
    HideMainDiv();
    ajaxCallGet("/login",'load');
}
function RegisterLoader()
{
    HideMainDiv();
    ajaxCallGet("/register",'load');
}
function AddUser()
{
    
    if (validate_compare())
    {
       
        var formdata = new FormData();
        formdata.append("Username",document.getElementById('txtUsername').value);
        formdata.append("Password",document.getElementById('txtPassword').value);
        ajaxCallPost("/register",formdata,'load');
        
        if (document.getElementById('hiddenstatus').value == 1)
        {
            alert("You have been registered successfully!");
        }
        else
        {
            alert("Problem in adding your data, try again later!");
        }
    }
}
function HideMainDiv()
{
    document.getElementById('maindiv').style.display = "none";
}