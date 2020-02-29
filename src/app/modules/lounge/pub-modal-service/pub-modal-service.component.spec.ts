import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubModalServiceComponent } from './pub-modal-service.component';

describe('PubModalServiceComponent', () => {
  let component: PubModalServiceComponent;
  let fixture: ComponentFixture<PubModalServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubModalServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubModalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
