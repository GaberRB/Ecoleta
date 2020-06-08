const express = require("express")
const server = express()

//pegar banco de dados
const db = require("./database/db.js")

//config pasta public
server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//configurar caminhos na app
//pagina inicial
// req = requisição
//res = resposta
server.get("/", (req, res) => {
   return res.render("index.html", {title: "Seu marketplace de coleta de resíduos"})
})

server.get("/create-point", (req, res) => {
   
   //req.query
   return res.render("create-point.html")
})
server.post("/savepoint", (req, res) => {
   // req.body
   //console.log(req.body)
    //inserir dados na tabela
    //inserir dados na tabela
    const query = `
            INSERT INTO places(
                name,
                image,
                address,
                address2,
                state,
                city,
                items
            ) VALUES(  ?,?,?,?,?,?,?);
        `
    const values = [
            req.body.name,
            req.body.image,
            req.body.address,  
            req.body.address2,  
            req.body.state,  
            req.body.city,  
            req.body.items           
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
            return res.send("Erro no cadastro")
        }
        return res.render("create-point.html", {saved: true})

    }
    db.run(query,values, afterInsertData)

   

})
   
   

server.get("/search", (req, res) => {

   const search = req.query.search

   if(search == ""){
       //mostrar com base no banco
       return res.render("search-results.html", {total: 0})
      
   }

   db.all(`SELECT * FROM places WHERE state LIKE '%${search}%'`, function(err, rows){
           if(err){
               return console.log(err)
           }
           const total = rows.length
           //mostrar com base no banco
           console.log(rows)
           return res.render("search-results.html", {places: rows, total: total})
       })   

    
 })

//ligar o servidor
server.listen(3000)
