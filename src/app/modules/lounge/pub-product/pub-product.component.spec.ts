import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubProductComponent } from './pub-product.component';

describe('PubProductComponent', () => {
  let component: PubProductComponent;
  let fixture: ComponentFixture<PubProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
