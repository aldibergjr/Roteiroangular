import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './alunos.service';

@Component({
  selector: 'app-root',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
   constructor(private alunoService: AlunoService) {}

   aluno: Aluno = new Aluno();
   alunos: Aluno[];
   cpfduplicado: boolean = false;

   criarAluno(a: Aluno): void {
    this.alunoService.criar(a)
    .then(ab => {
       if (ab) {
          this.alunos.push(ab);
          this.aluno = new Aluno();
       } else {
          this.cpfduplicado = true;
       }
    })
    .catch(erro => alert(erro));
   }

   removerAluno(a: Aluno): void{
     
      this.alunoService.remove(a).then(ab => {
         let index = this.alunos.findIndex(x => x.cpf == ab.cpf)
         this.alunos.splice(index,1);
      }).catch(erro=> alert(erro));
   }

   onMove(): void {
      this.cpfduplicado = false;
   }

   ngOnInit(): void {
    this.alunoService.getAlunos()
    .then(as => this.alunos = as)
    .catch(erro => alert(erro));
   }

}