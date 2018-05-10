import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMedisignComponent } from './page-medisign.component';

describe('PageMedisignComponent', () => {
  let component: PageMedisignComponent;
  let fixture: ComponentFixture<PageMedisignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMedisignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMedisignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
