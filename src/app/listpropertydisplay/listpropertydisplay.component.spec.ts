import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpropertydisplayComponent } from './listpropertydisplay.component';

describe('ListpropertydisplayComponent', () => {
  let component: ListpropertydisplayComponent;
  let fixture: ComponentFixture<ListpropertydisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpropertydisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpropertydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
