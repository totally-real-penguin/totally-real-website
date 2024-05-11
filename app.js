const themeButton = document.getElementById("theme");
const body = document.body;


if (getCookie("theme") == null) {
    setCookie("theme","dark",365)
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }


function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split(";");
    let result  = null
    cArray.forEach(e => {
        if(e.indexOf(name) == 0){
            result = e.substring(name.length + 1)
        }
    })
    return result
}

if (getCookie("theme") != null) {
    body.classList.add(getCookie("theme"))
}

themeButton.onclick = () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light","dark")
        setCookie("theme","dark",365)
    }else {
        body.classList.replace("dark","light")
        setCookie("theme","dark",365)
    }
}