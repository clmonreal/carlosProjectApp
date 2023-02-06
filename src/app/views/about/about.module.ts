import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/app/templates/header/header.module';
import { FooterModule } from 'src/app/templates/footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
]

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    FooterModule
  ]
})
export class AboutModule { }
