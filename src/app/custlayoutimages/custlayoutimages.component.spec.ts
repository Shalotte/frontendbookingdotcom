import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustlayoutimagesComponent } from './custlayoutimages.component';

describe('CustlayoutimagesComponent', () => {
  let component: CustlayoutimagesComponent;
  let fixture: ComponentFixture<CustlayoutimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustlayoutimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustlayoutimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
