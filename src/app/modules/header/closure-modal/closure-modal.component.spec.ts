import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosureModalComponent } from './closure-modal.component';

describe('ClosureModalComponent', () => {
  let component: ClosureModalComponent;
  let fixture: ComponentFixture<ClosureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
