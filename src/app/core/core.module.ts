import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


// COMPONENTS
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NavComponent } from './layout/nav/nav.component';



import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [MainLayoutComponent, NavComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  exports: [MainLayoutComponent],
  bootstrap: [NavComponent],
})
export class CoreModule { }
