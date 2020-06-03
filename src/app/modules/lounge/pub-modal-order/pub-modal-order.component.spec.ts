import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubModalOrderComponent } from './pub-modal-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Table } from 'src/app/models/Table';

xdescribe('PubModalOrderComponent', () => {
  let component: PubModalOrderComponent;
  let fixture: ComponentFixture<PubModalOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PubModalOrderComponent],
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
    fixture = TestBed.createComponent(PubModalOrderComponent);
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
