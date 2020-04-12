import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges, ComponentFactoryResolver } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { MatError } from '@angular/material/form-field';

@Directive({
  selector: '[appControlRequired]'
})
export class RequiredDirective implements OnChanges {

  @Input('appControlRequired') isControlRequired?: any;

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
    private readonly control: NgControl
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.el.nativeElement.parentElement.parentElement.parentElement);
    // Construcción de validador txt
    // const componentFactory = this.resolver.resolveComponentFactory(MatError);
    // const div = this.renderer.createElement('div');
    // const text = this.renderer.createText('Hello world!');
    // this.renderer.appendChild(div, componentFactory);
    // this.renderer.setAttribute(div, '#slot11', 'slot11');

    // this.renderer.appendChild(this.el.nativeElement.parentElement, componentFactory);
    // console.log(this.control);

    // Formulario
    this.control.control.setValidators([Validators.required]);
    this.control.control.updateValueAndValidity();
  }



}
