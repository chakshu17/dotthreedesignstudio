import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallHungSofaComponent } from './wall-hung-sofa.component';

describe('WallHungSofaComponent', () => {
  let component: WallHungSofaComponent;
  let fixture: ComponentFixture<WallHungSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallHungSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallHungSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
