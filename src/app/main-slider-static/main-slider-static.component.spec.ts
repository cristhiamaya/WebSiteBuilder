import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSliderStaticComponent } from './main-slider-static.component';

describe('MainSliderStaticComponent', () => {
  let component: MainSliderStaticComponent;
  let fixture: ComponentFixture<MainSliderStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSliderStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSliderStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
