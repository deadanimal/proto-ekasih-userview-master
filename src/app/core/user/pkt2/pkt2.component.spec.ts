import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pkt2Component } from './pkt2.component';

describe('Pkt2Component', () => {
  let component: Pkt2Component;
  let fixture: ComponentFixture<Pkt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pkt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pkt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
