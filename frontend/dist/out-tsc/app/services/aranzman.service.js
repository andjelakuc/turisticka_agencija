import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AranzmanService = class AranzmanService {
    constructor(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    dohvatiSveAranzmane() {
        return this.http.get(`${this.uri}/aranzmani/dohvatiSveAranzmane`);
    }
};
AranzmanService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AranzmanService);
export { AranzmanService };
//# sourceMappingURL=aranzman.service.js.map