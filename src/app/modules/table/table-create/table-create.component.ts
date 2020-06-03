import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.component.html',
  styleUrls: ['../../../../assets/css/table_create.css']

})
export class TableCreateComponent implements OnInit {

  tableForm: FormGroup;
  buttonAccept: boolean;

  icons: any[];
  iconClass: string;

  constructor(
    private readonly fb: FormBuilder,
    public readonly appService: AppService,
    public readonly modal: NgbActiveModal,
  ) {
    this.tableForm = this.fb.group({});
    this.buttonAccept = false;
    this.iconClass = 'fa-beer fas';
    this.icons = [
      { name: 'Icono de Jarra de Cerveza', class: 'fa-beer fas' },
      { name: 'Manzana', class: 'fas fa-apple-alt' },
      { name: 'Peligro Biológico', class: 'fas fa-biohazard' },
      { name: 'Bomba', class: 'fas fa-bomb' },
      { name: 'Boliche', class: 'fas fa-bowling-ball' },
      { name: 'Diana', class: 'fas fa-bullseye' },
      { name: 'Rey y Reina', class: 'fas fa-chess' },
      { name: 'Café', class: 'fas fa-coffee' },
      { name: 'Comentario', class: 'fas fa-comment' },
      { name: 'Disco', class: 'fas fa-compact-disc' },
      { name: 'Sofá', class: 'fas fa-couch' },
      { name: 'Corazón', class: 'fas fa-heart' },
      { name: 'Musica', class: 'fas fa-music' },
      { name: 'Etiqueta', class: 'fas fa-tag' },
      { name: 'vino', class: 'fas fa-wine-glass' },
      { name: 'Botella', class: 'fas fa-wine-bottle' },
    ];
  }

  ngOnInit(): void {
    this.formConstructor();
    this.formChange();
  }

  formConstructor() {
    this.tableForm.addControl('id', new FormControl('', { validators: [] }));
    this.tableForm.addControl('name', new FormControl('', { validators: [] }));
    this.tableForm.addControl('description', new FormControl('', { validators: [] }));
    this.tableForm.addControl('icon', new FormControl({ name: 'Icono de Jarra de Cerveza', class: 'fa-beer fas' }, { validators: [] }));
    this.tableForm.addControl('label', new FormControl('', { validators: [] }));
    this.tableForm.addControl('order', new FormControl('', { validators: [] }));
    this.tableForm.addControl('active', new FormControl('', { validators: [] }));
    this.tableForm.addControl('store_id', new FormControl('', { validators: [] }));

    // patchValue, la anterior app lo necesita
    this.tableForm.patchValue(
      {
      label: {
        options: ['serviceCreate', 'orderCreate', 'qrcodeGenerate'],
        position: ['top', 'right', 'bottom', 'left'],
        logo: 'table.png',
        icon: 'fas fa-list'
      },
      icon: { name: 'Icono de Jarra de Cerveza', class: 'fa-beer fas' }
    },
  );

  }

  formChange() {
    this.tableForm.get('icon').valueChanges.subscribe(value => {
      this.iconClass = 'fa-beer fas';
      if (value) {
        this.iconClass = value.class;
      }
    });
  }

  onSubmit(event: Event) { }

}
