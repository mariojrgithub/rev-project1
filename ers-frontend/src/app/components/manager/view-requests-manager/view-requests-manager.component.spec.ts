import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestsManagerComponent } from './view-requests-manager.component';

describe('ViewRequestsManagerComponent', () => {
  let component: ViewRequestsManagerComponent;
  let fixture: ComponentFixture<ViewRequestsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRequestsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
