import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductItemComponent } from './our-product-item.component';

describe('OurProductItemComponent', () => {
  let component: OurProductItemComponent;
  let fixture: ComponentFixture<OurProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
