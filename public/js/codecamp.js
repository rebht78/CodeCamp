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
        var formdata = {};
        formdata.Username = document.getElementById('txtUsername').value;
        formdata.Password = document.getElementById('txtPassword').value;
        ajaxCallPost("/register",JSON.stringify(formdata),'load');
        
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
function CheckLoginDetails()
{
    if (validate_comp())
    {
        var formdata = {};
        formdata.Username = document.getElementById('txtUsername').value;
        formdata.Password = document.getElementById('txtPassword').value;
        ajaxCallPost("/login",JSON.stringify(formdata),'load');

        if (document.getElementById('hiddenstatus').value == 0)
        {
            alert("Invalid Username or Password!");
        }
    }
}