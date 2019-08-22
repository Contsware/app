import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoPage } from './geo.page';

describe('GeoPage', () => {
  let component: GeoPage;
  let fixture: ComponentFixture<GeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
