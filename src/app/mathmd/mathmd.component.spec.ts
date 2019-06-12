import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathmdComponent } from './mathmd.component';

describe('MathmdComponent', () => {
  let component: MathmdComponent;
  let fixture: ComponentFixture<MathmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
