const Opt = document.getElementsByClassName("opt")
const Signin = document.getElementsByClassName("signin")

Signin.addEventListener("click", () => {
    Opt.style.display ="block"
})

Signin.addEventListener("dblclick", () => {
    Opt.style.display ="none"
})