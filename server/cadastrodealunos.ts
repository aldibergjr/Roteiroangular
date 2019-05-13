import { Aluno } from '../ta-gui/src/app/aluno';

export class CadastroDeAlunos {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): Aluno {
    var result = null;
    if (this.cpfNaoCadastrado(aluno.cpf) && this.loginNaoCadastrado(aluno.loginGit)) {
      result = new Aluno();
      result.copyFrom(aluno);
      this.alunos.push(result);
    }
    return result;
  }

  cpfNaoCadastrado(cpf: string): boolean {
     return !this.alunos.find(a => a.cpf == cpf);
  }
  loginNaoCadastrado(git: string):boolean{
    return !this.alunos.find(a => a.loginGit == git)
  }
  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.copyFrom(aluno);
    return result;
  }
  remover(aluno: Aluno): boolean{ 
    let index = this.alunos.findIndex(a => a.cpf == aluno.cpf)
      this.alunos.splice(index,1);
      return true;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }
}