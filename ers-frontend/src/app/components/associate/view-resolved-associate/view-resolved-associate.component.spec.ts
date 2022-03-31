import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResolvedAssociateComponent } from './view-resolved-associate.component';

describe('ViewResolvedAssociateComponent', () => {
  let component: ViewResolvedAssociateComponent;
  let fixture: ComponentFixture<ViewResolvedAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResolvedAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResolvedAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
