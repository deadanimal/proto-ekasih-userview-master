import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniRekodComponent } from './kemaskini-rekod.component';

describe('KemaskiniRekodComponent', () => {
  let component: KemaskiniRekodComponent;
  let fixture: ComponentFixture<KemaskiniRekodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemaskiniRekodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemaskiniRekodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
