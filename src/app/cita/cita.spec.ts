import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cita } from './cita';

describe('Cita', () => {
  let component: Cita;
  let fixture: ComponentFixture<Cita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
