import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlunoService } from './alunos.service';
var MetasComponent = /** @class */ (function () {
    function MetasComponent(alunoService) {
        this.alunoService = alunoService;
    }
    MetasComponent.prototype.atualizarAluno = function (aluno) {
        this.alunoService.atualizar(aluno);
    };
    MetasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alunoService.getAlunos()
            .then(function (alunos) { return _this.alunos = alunos; })
            .catch(function (erro) { return alert(erro); });
    };
    MetasComponent = tslib_1.__decorate([
        Component({
            selector: 'metas',
            templateUrl: './metas.component.html',
            styleUrls: ['./metas.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AlunoService])
    ], MetasComponent);
    return MetasComponent;
}());
export { MetasComponent };
//# sourceMappingURL=metas.component.js.map