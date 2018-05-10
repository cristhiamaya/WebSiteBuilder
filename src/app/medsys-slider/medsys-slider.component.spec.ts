import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsysSliderComponent } from './medsys-slider.component';

describe('MedsysSliderComponent', () => {
  let component: MedsysSliderComponent;
  let fixture: ComponentFixture<MedsysSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedsysSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsysSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
