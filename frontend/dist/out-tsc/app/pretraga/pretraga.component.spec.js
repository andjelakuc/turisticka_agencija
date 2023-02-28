import { TestBed } from '@angular/core/testing';
import { PretragaComponent } from './pretraga.component';
describe('PretragaComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PretragaComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(PretragaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pretraga.component.spec.js.map