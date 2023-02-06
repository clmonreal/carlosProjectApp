import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit.component';
import { HeaderModule } from 'src/app/templates/header/header.module';
import { FooterModule } from 'src/app/templates/footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EditComponent
  }
]

@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    FooterModule,
    ReactiveFormsModule
  ]
})
export class EditModule { }
