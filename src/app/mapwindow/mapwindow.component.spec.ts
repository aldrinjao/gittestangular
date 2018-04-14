import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapwindowComponent } from './mapwindow.component';

describe('MapwindowComponent', () => {
  let component: MapwindowComponent;
  let fixture: ComponentFixture<MapwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
