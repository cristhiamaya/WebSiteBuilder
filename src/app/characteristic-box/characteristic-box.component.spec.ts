import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicBoxComponent } from './characteristic-box.component';

describe('CharacteristicBoxComponent', () => {
  let component: CharacteristicBoxComponent;
  let fixture: ComponentFixture<CharacteristicBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
