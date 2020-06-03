import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubModalAccountComponent } from './pub-modal-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Table } from 'src/app/models/Table';

describe('PubModalAccountComponent', () => {
  let component: PubModalAccountComponent;
  let fixture: ComponentFixture<PubModalAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubModalAccountComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        NgbActiveModal,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubModalAccountComponent);
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
    component.orders = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
