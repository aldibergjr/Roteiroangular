"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    constructor() {
        this.clean();
    }
    clean() {
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.loginGit = "";
        this.metas = new Map();
    }
    clone() {
        var aluno = new Aluno();
        aluno.metas = new Map();
        aluno.copyFrom(this);
        return aluno;
    }
    copyFrom(from) {
        this.nome = from.nome;
        this.cpf = from.cpf;
        this.email = from.email;
        this.loginGit = from.loginGit;
        this.copyMetasFrom(from.metas);
    }
    copyMetasFrom(from) {
        this.metas = new Map();
        for (let key in from) {
            this.metas[key] = from[key];
        }
    }
}
exports.Aluno = Aluno;
//# sourceMappingURL=aluno.js.map