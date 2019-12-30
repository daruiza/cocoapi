import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarrComponent } from './toolbarr.component';

describe('ToolbarrComponent', () => {
  let component: ToolbarrComponent;
  let fixture: ComponentFixture<ToolbarrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
