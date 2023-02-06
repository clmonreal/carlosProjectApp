import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { HeaderModule } from 'src/app/templates/header/header.module';
import { FooterModule } from 'src/app/templates/footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
]

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    FooterModule
  ]
})
export class ListModule { }
