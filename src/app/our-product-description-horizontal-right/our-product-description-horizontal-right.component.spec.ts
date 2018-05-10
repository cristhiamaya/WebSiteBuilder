import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductDescriptionHorizontalRightComponent } from './our-product-description-horizontal-right.component';

describe('OurProductDescriptionHorizontalRightComponent', () => {
  let component: OurProductDescriptionHorizontalRightComponent;
  let fixture: ComponentFixture<OurProductDescriptionHorizontalRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductDescriptionHorizontalRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductDescriptionHorizontalRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
