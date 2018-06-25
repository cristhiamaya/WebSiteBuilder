import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSliderCurvedComponent } from './main-slider-curved.component';

describe('MainSliderCurvedComponent', () => {
  let component: MainSliderCurvedComponent;
  let fixture: ComponentFixture<MainSliderCurvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSliderCurvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSliderCurvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
