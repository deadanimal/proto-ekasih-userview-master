import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarBaruComponent } from './daftar-baru.component';

describe('DaftarBaruComponent', () => {
  let component: DaftarBaruComponent;
  let fixture: ComponentFixture<DaftarBaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarBaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
