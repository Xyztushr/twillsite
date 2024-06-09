const sidenav = document.querySelector("#sidenav")
const mainbody = document.querySelector("main")
const Open = () =>{
    sidenav.style.display = 'flex'
    mainbody.style.display = "none"
    }
    const Close = () =>{
        sidenav.style.display = 'none'
        mainbody.style.display = "block"
}