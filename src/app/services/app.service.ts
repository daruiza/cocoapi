import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private theme: string;
  constructor() {
    this.theme = 'candy-theme';
  }

  public getTheme(): string { return this.theme; }
  public setTheme(theme: string): void { this.theme = theme; }

}
