import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailseComponent } from './trailse.component';

describe('TrailseComponent', () => {
  let component: TrailseComponent;
  let fixture: ComponentFixture<TrailseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
