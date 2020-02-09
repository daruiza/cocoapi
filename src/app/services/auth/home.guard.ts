import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class HomeGuard implements CanActivate {

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService
        ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.checkLogin()) {
            this.router.navigate(['home/welcome']);
            return false;
        }
        return true;
    }
}
