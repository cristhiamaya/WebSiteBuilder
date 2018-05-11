import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedisignSliderComponent } from './medisign-slider.component';

describe('MedisignSliderComponent', () => {
  let component: MedisignSliderComponent;
  let fixture: ComponentFixture<MedisignSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedisignSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedisignSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
