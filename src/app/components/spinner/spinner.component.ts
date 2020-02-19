import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/components/loading/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['../../../assets/css/components_spinner.css'],
})
export class SpinnerComponent implements OnInit {

  loading$: Observable<boolean>;

  constructor(private readonly loadingService: LoadingService) {
    this.loading$ = this.loadingService.getLoading();
  }

  ngOnInit() {
    this.loadingService.showLoading();
  }

}
