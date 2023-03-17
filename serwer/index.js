const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
const port=3000

const users=[
    {user:"admin",haslo:"admin",upr:"admin"},
    {user:"user",haslo:"user",upr:"user"},
    {user:"Jan",haslo:"Kowalski",upr:"user"}
]

app.get('/get/:user/:haslo',(req,res)=>{
const user=req.params.user
const haslo=req.params.haslo

for(let i=0;i<=users.length-1;i++){
if(users[i].user==user && users[i].haslo==haslo){
res.json({user:user,upr:users[i].upr})
}


}

})



app.listen(port, ()=> {
    console.log("aplikacja dziala na porcie "+port)
})