const themeButton = document.getElementById("theme");
const body = document.body;

const storedTheme = CacheStorage.getItem("theme");

if (storedTheme) {
    body.classList.add(storedTheme)
}else {
    body.classList.add("light")
}
themeButton.onclick = () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light","dark")
        CacheStorage.setItem("theme","dark")
    }else {
        body.classList.replace("dark","light")
        CacheStorage.setItem("theme","light")
    }
}