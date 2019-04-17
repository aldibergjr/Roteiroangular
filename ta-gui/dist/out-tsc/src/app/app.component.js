import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './alunos.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(alunoService) {
        this.alunoService = alunoService;
        this.title = 'dale-gui';
        this.aluno = new Aluno();
        this.alunos = [];
        this.cpfduplicado = false;
    }
    ;
    AppComponent.prototype.criarAluno = function (a) {
        if (this.alunoService.criar(a)) {
            this.alunos.push(a);
            this.aluno = new Aluno();
            ;
        }
        else {
            this.cpfduplicado = true;
        }
    };
    AppComponent.prototype.onMove = function () {
        this.cpfduplicado = false;
    };
    AppComponent.prototype.atualizarAluno = function (aluno) {
        this.alunoService.atualizar(aluno);
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AlunoService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map