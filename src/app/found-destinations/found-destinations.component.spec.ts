import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundDestinationsComponent } from './found-destinations.component';

describe('FoundDestinationsComponent', () => {
  let component: FoundDestinationsComponent;
  let fixture: ComponentFixture<FoundDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
