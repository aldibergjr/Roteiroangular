"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_1 = require("../ta-gui/src/app/aluno");
class CadastroDeAlunos {
    constructor() {
        this.alunos = [];
    }
    criar(aluno) {
        var result = null;
        if (this.cpfNaoCadastrado(aluno.cpf) && this.loginNaoCadastrado(aluno.loginGit)) {
            result = new aluno_1.Aluno();
            result.copyFrom(aluno);
            this.alunos.push(result);
        }
        return result;
    }
    cpfNaoCadastrado(cpf) {
        return !this.alunos.find(a => a.cpf == cpf);
    }
    loginNaoCadastrado(git) {
        return !this.alunos.find(a => a.loginGit == git);
    }
    atualizar(aluno) {
        var result = this.alunos.find(a => a.cpf == aluno.cpf);
        if (result)
            result.copyFrom(aluno);
        return result;
    }
    remover(aluno) {
        ("aln cds: " + JSON.stringify(aluno));
        let index = this.alunos.findIndex(a => a.cpf == aluno.cpf);
        this.alunos.splice(index, 1);
        // delete this.alunos[index]
        return true;
    }
    getAlunos() {
        return this.alunos;
    }
}
exports.CadastroDeAlunos = CadastroDeAlunos;
//# sourceMappingURL=cadastrodealunos.js.map