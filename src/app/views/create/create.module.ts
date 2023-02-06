import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create.component';
import { FooterModule } from 'src/app/templates/footer/footer.module';
import { HeaderModule } from 'src/app/templates/header/header.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent
  }
]

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    FooterModule,
    ReactiveFormsModule
  ]
})
export class CreateModule { }
