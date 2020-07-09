import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUnitComponent } from './single-unit.component';

describe('SingleUnitComponent', () => {
  let component: SingleUnitComponent;
  let fixture: ComponentFixture<SingleUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
