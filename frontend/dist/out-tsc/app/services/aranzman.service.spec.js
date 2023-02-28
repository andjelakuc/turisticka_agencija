import { TestBed } from '@angular/core/testing';
import { AranzmanService } from './aranzman.service';
describe('AranzmanService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AranzmanService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=aranzman.service.spec.js.map