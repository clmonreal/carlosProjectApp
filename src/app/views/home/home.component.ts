import { Component, OnInit } from '@angular/core';
import { Authguard } from 'src/app/services/auth/auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  title:string = 'CARLOG APP';
}
