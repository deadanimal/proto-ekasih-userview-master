import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniMaklumatBantuanComponent } from './kemaskini-maklumat-bantuan.component';

describe('KemaskiniMaklumatBantuanComponent', () => {
  let component: KemaskiniMaklumatBantuanComponent;
  let fixture: ComponentFixture<KemaskiniMaklumatBantuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemaskiniMaklumatBantuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemaskiniMaklumatBantuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
