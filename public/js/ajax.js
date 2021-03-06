function ajaxCallPost(url, params, destination) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    var destinationObj = document.getElementById(destination);

    xhr.onreadystatechange = function () { 
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            destinationObj.innerHTML = this.responseText;
        }
    }
    xhr.send(params);
}
function ajaxCallGet(url, destination) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    var destinationObj = document.getElementById(destination);
    
    xhr.onreadystatechange = function () { 
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            destinationObj.innerHTML = this.responseText;
        }
    }
    xhr.send();
}