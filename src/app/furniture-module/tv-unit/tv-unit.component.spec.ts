import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvUnitComponent } from './tv-unit.component';

describe('TvUnitComponent', () => {
  let component: TvUnitComponent;
  let fixture: ComponentFixture<TvUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
