import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Componentes
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        provideHttpClient(),
        ReactiveFormsModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        AccessDeniedComponent,
        MainLayoutComponent
    ],
    providers: [],
})
export class AppModule { }