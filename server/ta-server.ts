import express = require('express');
import bodyParser = require("body-parser");

import {Aluno} from '../ta-gui/src/app/aluno';
import {CadastroDeAlunos} from './cadastrodealunos';

var app = express();

var cadastro: CadastroDeAlunos = new CadastroDeAlunos();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/alunos', function (req, res) {
  console.log('GET /alunos: ' + req)
  res.send(JSON.stringify(cadastro.getAlunos()));
})

app.post('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno> req.body; //verificar se é mesmo Aluno!
  aluno = cadastro.criar(aluno);
  if (aluno) {
    res.send({"success": "O aluno foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser cadastrado"});
  }
})

app.put('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno> req.body;
  aluno = cadastro.atualizar(aluno);
  if (aluno) {
    res.send({"success": "O aluno foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser atualizado"});
  }
})

app.delete('/aluno', function(req: express.Request,res: express.Response){
    var aluno:Aluno = <Aluno>req.body;
    console.log("ta-sv: "+JSON.stringify(aluno))
    var a = cadastro.remover(aluno)
    if(a)
      res.send({"success": "O aluno foi deletado com sucesso"})
    else
      res.send({"failure": "O aluno não pode ser deletado"})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

export { app }