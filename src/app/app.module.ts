import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DirectoryComponent } from './directory/directory.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: DirectoryComponent },
  { path: 'create', component: CreateEmployeeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectoryComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    //routing
  ],
  providers: [
    //appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
