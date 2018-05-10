import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductDescriptionHorizontalListComponent } from './our-product-description-horizontal-list.component';

describe('OurProductDescriptionHorizontalListComponent', () => {
  let component: OurProductDescriptionHorizontalListComponent;
  let fixture: ComponentFixture<OurProductDescriptionHorizontalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductDescriptionHorizontalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductDescriptionHorizontalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
