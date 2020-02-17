import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public theme: string;
  constructor() {
    this.theme = 'blue-gray-theme';
  }

  public getTheme(): string { return this.theme; }
  public setTheme(theme: string): void { this.theme = theme; }

}
