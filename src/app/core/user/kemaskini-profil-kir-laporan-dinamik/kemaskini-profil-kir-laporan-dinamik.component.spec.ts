import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniProfilKirLaporanDinamikComponent } from './kemaskini-profil-kir-laporan-dinamik.component';

describe('KemaskiniProfilKirLaporanDinamikComponent', () => {
  let component: KemaskiniProfilKirLaporanDinamikComponent;
  let fixture: ComponentFixture<KemaskiniProfilKirLaporanDinamikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemaskiniProfilKirLaporanDinamikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemaskiniProfilKirLaporanDinamikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
