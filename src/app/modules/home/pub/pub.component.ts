import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/services/welcome.service';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {

  constructor(
    private readonly welcomeService: WelcomeService,
  ) { }

  ngOnInit() {
    // Consumo de servico de tablas
    this.welcomeService.pub().subscribe(
      (pub) => console.log(pub)
    );
  }

}
