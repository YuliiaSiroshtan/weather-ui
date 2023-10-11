import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { API_BASE_URL, ApiClient } from './services/api-client.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [
    ApiClient,
    {
      provide: API_BASE_URL,
      useValue: environment.baseUrl,
    },
  ],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
