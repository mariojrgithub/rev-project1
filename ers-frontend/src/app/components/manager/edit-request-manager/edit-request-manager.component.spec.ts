import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequestManagerComponent } from './edit-request-manager.component';

describe('EditRequestManagerComponent', () => {
  let component: EditRequestManagerComponent;
  let fixture: ComponentFixture<EditRequestManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRequestManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRequestManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
