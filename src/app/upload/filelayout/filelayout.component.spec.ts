import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilelayoutComponent } from './filelayout.component';

describe('FilelayoutComponent', () => {
  let component: FilelayoutComponent;
  let fixture: ComponentFixture<FilelayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilelayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
