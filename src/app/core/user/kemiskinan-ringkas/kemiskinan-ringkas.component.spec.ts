import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemiskinanRingkasComponent } from './kemiskinan-ringkas.component';

describe('KemiskinanRingkasComponent', () => {
  let component: KemiskinanRingkasComponent;
  let fixture: ComponentFixture<KemiskinanRingkasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemiskinanRingkasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemiskinanRingkasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
