import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdevelopersComponent } from './aboutdevelopers.component';

describe('AboutdevelopersComponent', () => {
  let component: AboutdevelopersComponent;
  let fixture: ComponentFixture<AboutdevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutdevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutdevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
