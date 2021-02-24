import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pkt3Component } from './pkt3.component';

describe('Pkt3Component', () => {
  let component: Pkt3Component;
  let fixture: ComponentFixture<Pkt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pkt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pkt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
