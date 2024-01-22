
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
