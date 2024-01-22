import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
count!:number
  constructor(
    private store:Store<{count:number}>
  ) {
    this.store.pipe(select((state)=>state.count)).subscribe((res)=>this.count=res);
  }
}
