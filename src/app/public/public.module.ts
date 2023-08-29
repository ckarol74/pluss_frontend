import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { CommonComponentsModule } from '../common/common-components.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PublicRoutingModule,
    CommonComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PublicModule {}
