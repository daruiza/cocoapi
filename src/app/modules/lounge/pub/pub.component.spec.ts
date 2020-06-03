import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubComponent } from './pub.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PubComponent', () => {
  let component: PubComponent;
  let fixture: ComponentFixture<PubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
