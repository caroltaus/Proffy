// ######## SERVIDOR ###########
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')


//CONFIG NUNJUCKS (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})


// CONFIG DO SERVIDOR
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//config arquivos estáticos
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500) // abre em http://127.0.0.1:5500/ ou localhost:5500

// comando no terminal: node src/server.js -> liga o servidor
//com o nodemon e package.json configurado => comando: npm run dev para ligar o servidor



