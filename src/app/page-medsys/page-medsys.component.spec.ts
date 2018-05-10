import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMedsysComponent } from './page-medsys.component';

describe('PageMedsysComponent', () => {
  let component: PageMedsysComponent;
  let fixture: ComponentFixture<PageMedsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMedsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMedsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
