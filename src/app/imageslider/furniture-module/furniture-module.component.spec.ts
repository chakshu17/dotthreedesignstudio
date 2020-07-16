import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureModuleComponent } from './furniture-module.component';

describe('FurnitureModuleComponent', () => {
  let component: FurnitureModuleComponent;
  let fixture: ComponentFixture<FurnitureModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
