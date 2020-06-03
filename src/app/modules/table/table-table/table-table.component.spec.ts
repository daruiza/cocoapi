import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTableComponent } from './table-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableTableComponent', () => {
  let component: TableTableComponent;
  let fixture: ComponentFixture<TableTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTableComponent ],
      imports: [
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
