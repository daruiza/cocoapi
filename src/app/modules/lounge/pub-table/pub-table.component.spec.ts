import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubTableComponent } from './pub-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Table } from 'src/app/models/Table';

describe('PubTableComponent', () => {
  let component: PubTableComponent;
  let fixture: ComponentFixture<PubTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubTableComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubTableComponent);
    component = fixture.componentInstance;
    const table = new Table();
    table.id = 0;
    table.description = '';
    table.icon = '';
    table.name = 'name';
    table.label = '';
    table.order = '';
    table.active = 0;
    table.store_id = 1;
    component.table = table;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
