import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PretragaComponent = class PretragaComponent {
    constructor(ruter, AranzmanService) {
        this.ruter = ruter;
        this.AranzmanService = AranzmanService;
    }
    ngOnInit() {
        this.AranzmanService.dohvatiSveAranzmane().subscribe((data) => {
            this.sviAranzmani = data;
        });
    }
};
PretragaComponent = __decorate([
    Component({
        selector: 'app-pretraga',
        templateUrl: './pretraga.component.html',
        styleUrls: ['./pretraga.component.css']
    })
], PretragaComponent);
export { PretragaComponent };
//# sourceMappingURL=pretraga.component.js.map