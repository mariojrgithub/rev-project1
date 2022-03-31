import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResolvedManagerComponent } from './view-resolved-manager.component';

describe('ViewResolvedManagerComponent', () => {
  let component: ViewResolvedManagerComponent;
  let fixture: ComponentFixture<ViewResolvedManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResolvedManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResolvedManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
