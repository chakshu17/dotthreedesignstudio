import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BungalowComponent } from './bungalow.component';

describe('BungalowComponent', () => {
  let component: BungalowComponent;
  let fixture: ComponentFixture<BungalowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BungalowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BungalowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
