import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportswindowComponent } from './reportswindow.component';

describe('ReportswindowComponent', () => {
  let component: ReportswindowComponent;
  let fixture: ComponentFixture<ReportswindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportswindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportswindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
