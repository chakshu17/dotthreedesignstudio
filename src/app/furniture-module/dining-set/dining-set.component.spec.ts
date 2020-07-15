import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningSetComponent } from './dining-set.component';

describe('DiningSetComponent', () => {
  let component: DiningSetComponent;
  let fixture: ComponentFixture<DiningSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
