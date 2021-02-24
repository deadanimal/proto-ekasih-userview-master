import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemiskinanTerperinciComponent } from './kemiskinan-terperinci.component';

describe('KemiskinanTerperinciComponent', () => {
  let component: KemiskinanTerperinciComponent;
  let fixture: ComponentFixture<KemiskinanTerperinciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemiskinanTerperinciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemiskinanTerperinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
