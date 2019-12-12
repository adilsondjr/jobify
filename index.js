const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    //response.send('Olá Fullstack Lab')
    response.render('home', {
        date: new Date()
    })
})

app.listen(3000, (err) =>{
    if(err){
        console.log('Não foi possível iniciar o servidor do Jobfy')
    }else{
        console.log('Servidor iniciado')
    }
})