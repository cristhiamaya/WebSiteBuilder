import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductDescriptionDoublelistComponent } from './our-product-description-doublelist.component';

describe('OurProductDescriptionDoublelistComponent', () => {
  let component: OurProductDescriptionDoublelistComponent;
  let fixture: ComponentFixture<OurProductDescriptionDoublelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductDescriptionDoublelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductDescriptionDoublelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
