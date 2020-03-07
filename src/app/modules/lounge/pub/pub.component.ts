import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/services/welcome.service';
import { Table } from 'src/app/models/Table';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {

  pubTables: Table[];

  constructor(
    private readonly welcomeService: WelcomeService,
  ) { }

  ngOnInit() {
    // Consumo de servico de tablas
    this.welcomeService.pub().subscribe(
      (pub) => this.pubTables = pub
    );

    //consumo de servicio de los productos 
  }

}
