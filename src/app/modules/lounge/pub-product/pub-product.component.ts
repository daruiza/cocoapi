import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/entities/user.service';

@Component({
  selector: 'app-pub-product',
  templateUrl: './pub-product.component.html',
  styleUrls: ['../../../../assets/css/lounge_pub_product.css']
})
export class PubProductComponent implements OnInit {

  @Input() product: any;
  @Output() addproduct = new EventEmitter<any>();

  constructor(
    public readonly userService: UserService
  ) { }

  ngOnInit() {
  }

  public addProduct(evt: Event) {
    // Siempre seleccionado ante una orden
    this.addproduct.emit(this.product);
  }

}
