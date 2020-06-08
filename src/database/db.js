//importar a dependecia sql

const sqlite3 = require("sqlite3").verbose()
//iniciar o objeto de banco de dados 
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db

//utilizar o objeto de banco para operççoes
// db.serialize(() => {
//     //criar tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //inserir dados na tabela
//     const query = `
//             INSERT INTO places(
//                 name,
//                 image,
//                 address,
//                 address2,
//                 state,
//                 city,
//                 items
//             ) VALUES(  ?,?,?,?,?,?,?);
//         `
//     const values = [
        
//               "Papersider",
//               "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//               "Rio do Sul",
//               "Guilherme Gemballa, Jardim America",
//               "Santa Catarina",
//               "Rio do Sul",
//               "Papelão"

//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)

//     }
//    // db.run(query,values, afterInsertData)

//     //consultar os dados da tabela
//     db.all(`
//         SELECT * FROM places
//     `, function(err,rows){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Aqui estão seus registros")
//         console.log(rows)
//     })

//  //deletar dados da tabela
//    db.run(`DELETE FROM places WHERE id = ?`, [2], function(err){
//         if(err){
//            return console.log(err)
//       }
//         console.log("deletado seus registros")
//    })

// })