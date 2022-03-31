import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestsAssociateComponent } from './view-requests-associate.component';

describe('ViewRequestsAssociateComponent', () => {
  let component: ViewRequestsAssociateComponent;
  let fixture: ComponentFixture<ViewRequestsAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRequestsAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestsAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
