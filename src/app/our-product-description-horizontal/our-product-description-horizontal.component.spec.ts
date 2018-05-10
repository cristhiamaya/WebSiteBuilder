import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductDescriptionHorizontalComponent } from './our-product-description-horizontal.component';

describe('OurProductDescriptionHorizontalComponent', () => {
  let component: OurProductDescriptionHorizontalComponent;
  let fixture: ComponentFixture<OurProductDescriptionHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductDescriptionHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductDescriptionHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
