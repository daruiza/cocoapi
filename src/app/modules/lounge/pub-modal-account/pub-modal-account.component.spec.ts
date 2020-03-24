import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubModalAccountComponent } from './pub-modal-account.component';

describe('PubModalAccountComponent', () => {
  let component: PubModalAccountComponent;
  let fixture: ComponentFixture<PubModalAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubModalAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubModalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
