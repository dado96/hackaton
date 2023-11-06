import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpesaComponent } from './spesa.component';

describe('SpesaComponent', () => {
  let component: SpesaComponent;
  let fixture: ComponentFixture<SpesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpesaComponent]
    });
    fixture = TestBed.createComponent(SpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
