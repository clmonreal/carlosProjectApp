import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { CreateComponent } from './views/create/create.component';
import { EditComponent } from './views/edit/edit.component';
import { ErrorComponent } from './views/error/error.component';
import { HomeComponent } from './views/home/home.component';
import { ListComponent } from './views/list/list.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'about', component:AboutComponent },
  { path:'contact', component:ContactComponent },
  { path:'create', component:CreateComponent },
  { path:'edit', component:EditComponent },
  { path:'error', component:ErrorComponent },
  { path:'home', component:HomeComponent },
  { path:'list', component:ListComponent },
  { path:'login', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, ContactComponent, CreateComponent, EditComponent, ErrorComponent, HomeComponent, ListComponent, LoginComponent]