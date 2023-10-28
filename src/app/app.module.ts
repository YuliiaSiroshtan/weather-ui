import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptor, AuthModule } from 'angular-auth-oidc-client';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    NgxSpinnerModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://localhost:5001',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri:
          window.location.origin + '/signout-callback-oidc',
        clientId: '4ecc4153-daf9-4eca-8b60-818a63637a81',
        customParamsCodeRequest: {
          client_secret: 'secret',
        },
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        secureRoutes: ['http://localhost:5000/', 'https://localhost:5001/'],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
