import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreateComponent } from './table-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

xdescribe('TableCreateComponent', () => {
  let component: TableCreateComponent;
  let fixture: ComponentFixture<TableCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCreateComponent ],
      imports: [
        ReactiveFormsModule,
        // HttpClientTestingModule
      ],
      providers: [
        NgbActiveModal,
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
