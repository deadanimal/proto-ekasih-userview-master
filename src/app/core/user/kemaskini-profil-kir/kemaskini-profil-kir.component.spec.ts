import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniProfilKirComponent } from './kemaskini-profil-kir.component';

describe('KemaskiniProfilKirComponent', () => {
  let component: KemaskiniProfilKirComponent;
  let fixture: ComponentFixture<KemaskiniProfilKirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemaskiniProfilKirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemaskiniProfilKirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
