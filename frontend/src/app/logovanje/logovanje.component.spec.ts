import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogovanjeComponent } from './logovanje.component';

describe('LogovanjeComponent', () => {
  let component: LogovanjeComponent;
  let fixture: ComponentFixture<LogovanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogovanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
