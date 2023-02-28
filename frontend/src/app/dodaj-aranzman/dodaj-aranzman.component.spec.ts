import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAranzmanComponent } from './dodaj-aranzman.component';

describe('DodajAranzmanComponent', () => {
  let component: DodajAranzmanComponent;
  let fixture: ComponentFixture<DodajAranzmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajAranzmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajAranzmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
