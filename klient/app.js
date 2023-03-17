async function getuser(){
const login=document.getElementById("login").value
const haslo=document.getElementById("haslo").value

const data=await fetch(`http://localhost:3000/get/${login}/${haslo}`)
const json=await data.json()
console.log(json)

if(json.user!=undefined){
    localStorage.setItem("upr",JSON.stringify(json))
}
else localStorage.setItem("upr","false")
}

function checkuser(){
const user=JSON.parse(localStorage.getItem("upr"))
const url=window.location.href
if(user.upr!="admin" && url.includes("admin.html")){
window.location.href="index.html"
}


}

function logout(){
    const user=localStorage.getItem("upr")

    localStorage.setItem(user,"false")
}