import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pkt1Component } from './pkt1.component';

describe('Pkt1Component', () => {
  let component: Pkt1Component;
  let fixture: ComponentFixture<Pkt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pkt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pkt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
