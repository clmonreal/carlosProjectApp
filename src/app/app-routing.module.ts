import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoadGuard } from './services/auth/auth.guard';
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'about',  canActivate: [AuthLoadGuard], loadChildren: () => import('../app/views/about/about.module').then(m => m.AboutModule) },
  { path:'contact',  canActivate: [AuthLoadGuard], loadChildren: () => import('../app/views/contact/contact.module').then(m => m.ContactModule) },
  { path:'create',  canActivate: [AuthLoadGuard], loadChildren: () => import('../app/views/create/create.module').then(m => m.CreateModule) },
  { path:'edit/:id',  canActivate: [AuthLoadGuard], loadChildren: () => import('../app/views/edit/edit.module').then(m => m.EditModule) },
  { path:'home',  canActivate: [AuthLoadGuard], loadChildren: () => import('../app/views/home/home.module').then(m => m.HomeModule) },
  { path:'list',  canActivate: [AuthLoadGuard], loadChildren: () => import('../app/views/list/list.module').then(m => m.ListModule) },
  { path:'login', component:LoginComponent },
  { path:'**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthLoadGuard]
})
export class AppRoutingModule { }
export const routingComponents = [ErrorComponent, LoginComponent]