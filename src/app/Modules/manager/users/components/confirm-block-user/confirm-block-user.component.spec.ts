import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBlockUserComponent } from './confirm-block-user.component';

describe('ConfirmBlockUserComponent', () => {
  let component: ConfirmBlockUserComponent;
  let fixture: ComponentFixture<ConfirmBlockUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmBlockUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmBlockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
