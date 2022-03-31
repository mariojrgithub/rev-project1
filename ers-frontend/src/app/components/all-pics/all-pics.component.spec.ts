import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicsComponent } from './all-pics.component';

describe('AllPicsComponent', () => {
  let component: AllPicsComponent;
  let fixture: ComponentFixture<AllPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
