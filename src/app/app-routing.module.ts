import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Authguard } from './services/auth/auth.guard';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { CreateComponent } from './views/create/create.component';
import { EditComponent } from './views/edit/edit.component';
import { ErrorComponent } from './views/error/error.component';
import { HomeComponent } from './views/home/home.component';
import { ListComponent } from './views/list/list.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'about',  canActivate: [Authguard], component:AboutComponent },
  { path:'contact', canActivate: [Authguard],  component:ContactComponent },
  { path:'create', canActivate: [Authguard],  component:CreateComponent },
  { path:'edit/:id', canActivate: [Authguard],  component:EditComponent },
  { path:'home', canActivate: [Authguard],  component:HomeComponent },
  { path:'list', canActivate: [Authguard],  component:ListComponent },
  { path:'login', component:LoginComponent },
  { path:'**', component:ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Authguard]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, ContactComponent, CreateComponent, EditComponent, ErrorComponent, HomeComponent, ListComponent, LoginComponent]