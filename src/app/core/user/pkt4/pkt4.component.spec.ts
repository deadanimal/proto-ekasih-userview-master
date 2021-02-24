import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pkt4Component } from './pkt4.component';

describe('Pkt4Component', () => {
  let component: Pkt4Component;
  let fixture: ComponentFixture<Pkt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pkt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pkt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
