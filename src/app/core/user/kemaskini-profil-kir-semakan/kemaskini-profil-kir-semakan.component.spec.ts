import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniProfilKirSemakanComponent } from './kemaskini-profil-kir-semakan.component';

describe('KemaskiniProfilKirSemakanComponent', () => {
  let component: KemaskiniProfilKirSemakanComponent;
  let fixture: ComponentFixture<KemaskiniProfilKirSemakanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemaskiniProfilKirSemakanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemaskiniProfilKirSemakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
