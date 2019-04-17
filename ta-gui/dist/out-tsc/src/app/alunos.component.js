import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './alunos.service';
var AlunosComponent = /** @class */ (function () {
    function AlunosComponent(alunoService) {
        this.alunoService = alunoService;
        this.aluno = new Aluno();
        this.cpfduplicado = false;
    }
    AlunosComponent.prototype.criarAluno = function (a) {
        var _this = this;
        this.alunoService.criar(a)
            .then(function (ab) {
            if (ab) {
                _this.alunos.push(ab);
                _this.aluno = new Aluno();
            }
            else {
                _this.cpfduplicado = true;
            }
        })
            .catch(function (erro) { return alert(erro); });
    };
    AlunosComponent.prototype.onMove = function () {
        this.cpfduplicado = false;
    };
    AlunosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alunoService.getAlunos()
            .then(function (as) { return _this.alunos = as; })
            .catch(function (erro) { return alert(erro); });
    };
    AlunosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './alunos.component.html',
            styleUrls: ['./alunos.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AlunoService])
    ], AlunosComponent);
    return AlunosComponent;
}());
export { AlunosComponent };
//# sourceMappingURL=alunos.component.js.map