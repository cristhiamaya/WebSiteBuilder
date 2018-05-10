import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductDescriptionVerticalComponent } from './our-product-description-vertical.component';

describe('OurProductDescriptionVerticalComponent', () => {
  let component: OurProductDescriptionVerticalComponent;
  let fixture: ComponentFixture<OurProductDescriptionVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductDescriptionVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductDescriptionVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
