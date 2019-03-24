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
function HideMainDiv()
{
    document.getElementById('maindiv').style.display = "none";
}