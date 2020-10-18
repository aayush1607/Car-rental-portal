import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResrevationsComponent } from './manage-resrevations.component';

describe('ManageResrevationsComponent', () => {
  let component: ManageResrevationsComponent;
  let fixture: ComponentFixture<ManageResrevationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageResrevationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageResrevationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
