const mongoose = require('mongoose');

mongoose.connect('mongodb:// 127.0.0.1:27017/escola',{
    userNewUrlParser : true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS : 20000
});

const db =mongoose.connection;

db.on('error',console.error.bind(console,"Falha na conexão"));

db.once('open',()=>{
    console.log("Conectado com sucesso");
});

const alunoSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    turma: String
})

const Alunos = mongoose.model('Alunos', alunoSchema)

Alunos.insertMany([
    {nome:'Fabio',idade: 49,turma:'1'},
    {nome:'Fatima',idade: 69,turma:'2'},
    {nome:'Felix',idade: 59,turma:'2'}
])

async function findAlunos(){
    try{
        const Alunos = await Alunos.find({/*parametro*/});  
        console.log('Alunos',Alunos)
    }
    catch (error){
        console.error('Alunos não encontrado')
}

}

findAlunos();