const themeButton = document.getElementById("theme");
const body = document.body;

document.cookie = "theme=light";

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

if (getCookie("theme")) {
    body.classList.add(getCookie("theme"))
}

themeButton.onclick = () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light","dark")
        document.cookie = "theme=dark"
    }else {
        body.classList.replace("dark","light")
        CacheStorage.setItem("theme","light")
        document.cookie = "theme=light"
    }
}