import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosureModalComponent } from './closure-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IClosure } from 'src/app/models/Closure';

describe('ClosureModalComponent', () => {
  let component: ClosureModalComponent;
  let fixture: ComponentFixture<ClosureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosureModalComponent ],
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
    fixture = TestBed.createComponent(ClosureModalComponent);
    component = fixture.componentInstance;
    const closure: IClosure = {};
    component.closure = closure;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
