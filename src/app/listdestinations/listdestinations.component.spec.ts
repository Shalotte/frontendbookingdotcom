import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdestinationsComponent } from './listdestinations.component';

describe('ListdestinationsComponent', () => {
  let component: ListdestinationsComponent;
  let fixture: ComponentFixture<ListdestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
