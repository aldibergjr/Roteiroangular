import { Component } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './alunos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'dale-gui';
  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  alunoService = new AlunoService();
  cpfduplicado: boolean = false;
  criarAluno(a:Aluno):void{
    if(this.alunoService.criar(a)){
      this.alunos.push(a);
      this.aluno = new Aluno();;
    }else{
      this.cpfduplicado = true;
    }

  }

   onMove(): void {
    this.cpfduplicado = false;
  }

  atualizarAluno(aluno: Aluno): void {
    this.alunoService.atualizar(aluno);
 }
  

}


