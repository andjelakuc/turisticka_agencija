import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurirajAranzmanComponent } from './azuriraj-aranzman.component';

describe('AzurirajAranzmanComponent', () => {
  let component: AzurirajAranzmanComponent;
  let fixture: ComponentFixture<AzurirajAranzmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzurirajAranzmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzurirajAranzmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
