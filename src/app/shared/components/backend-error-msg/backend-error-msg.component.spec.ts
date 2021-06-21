import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendErrorMsgComponent } from './backend-error-msg.component';

describe('BackendErrorMsgComponent', () => {
  let component: BackendErrorMsgComponent;
  let fixture: ComponentFixture<BackendErrorMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendErrorMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
