import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingAssociateComponent } from './view-pending-associate.component';

describe('ViewPendingAssociateComponent', () => {
  let component: ViewPendingAssociateComponent;
  let fixture: ComponentFixture<ViewPendingAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPendingAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
