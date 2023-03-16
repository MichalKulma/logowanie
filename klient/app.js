async function getdata(){
    const data=await fetch("http://localhost:3000/dane")
    json=await data.json()

}


function checklogin(){
    const login=document.getElementById("login").value
    const haslo=document.getElementById("haslo").value

    const user="admin"
    const adminpass="admin"
const user1="user"
const userpass="user"

    if(login==user && haslo==adminpass){
        console.log("zalogowano")
        localStorage.setItem("login","admin")
    window.location.href="admin.html"
    }

    else if(login==user1 && haslo==userpass){
        console.log("zalogowano")
        localStorage.setItem("login","user")
        window.location.href="user.html"
    }
    else{ console.log("błąd")
alert("błąd")
localStorage.setItem("login","false")
}
}


function checkadmin(){
const admin=localStorage.getItem("login")

if(admin!="admin"){
    window.location.href="login.html"
}
}

function logout(){
    localStorage.setItem("login","false")
}

function checkuser(){
    const user=localStorage.getItem('login')
    if(user!="user" ){
        window.location.href="login.html"
    }
    else if(user!="admin"){
        window.location.href="login.html"
    }
}