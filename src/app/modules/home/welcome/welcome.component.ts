import { Component, OnInit } from '@angular/core';
import { ClosureService } from 'src/app/services/components/closure/closure.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private readonly closureService: ClosureService) { }

  ngOnInit() {
    this.closureService.closures().subscribe(
      res => console.log(res));
  }

}
