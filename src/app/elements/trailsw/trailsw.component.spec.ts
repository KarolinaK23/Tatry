import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailswComponent } from './trailsw.component';

describe('TrailswComponent', () => {
  let component: TrailswComponent;
  let fixture: ComponentFixture<TrailswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
