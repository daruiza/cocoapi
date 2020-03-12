import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubModalOrderComponent } from './pub-modal-order.component';

describe('PubModalOrderComponent', () => {
  let component: PubModalOrderComponent;
  let fixture: ComponentFixture<PubModalOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubModalOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubModalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
