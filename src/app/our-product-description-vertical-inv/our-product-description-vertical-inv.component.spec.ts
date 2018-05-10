import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductDescriptionVerticalInvComponent } from './our-product-description-vertical-inv.component';

describe('OurProductDescriptionVerticalInvComponent', () => {
  let component: OurProductDescriptionVerticalInvComponent;
  let fixture: ComponentFixture<OurProductDescriptionVerticalInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductDescriptionVerticalInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductDescriptionVerticalInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
