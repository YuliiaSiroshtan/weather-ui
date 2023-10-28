import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;

  constructor(private oidcSecurityService: OidcSecurityService) {}
  ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData }) => {
        console.log(isAuthenticated);
        console.log(userData);
        this.isAuthenticated = isAuthenticated;
      });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((res) => console.log(res));
  }
}
