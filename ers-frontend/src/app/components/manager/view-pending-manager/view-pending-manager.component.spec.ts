import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingManagerComponent } from './view-pending-manager.component';

describe('ViewPendingManagerComponent', () => {
  let component: ViewPendingManagerComponent;
  let fixture: ComponentFixture<ViewPendingManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPendingManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
