import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { Store, select } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/NgRx/counter/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-my-counter',
	standalone: true,
	imports: [CommonModule, SharedModule],
	templateUrl: './my-counter.component.html',
	styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
	constructor(private store: Store<{ count: number }>) {
		this.count$ = store.pipe(select("count"))
		this.count$.subscribe((res) => { this.count = res });
		this.count$.subscribe((res) => { this.count2 = res });

	}
	count$!: Observable<number>
	count!: number
	count2!: number

	increment() {
		this.store.dispatch(increment())
	}

	decrement() {
		this.store.dispatch(decrement())
	}

	reset() {
		this.store.dispatch(reset())
	}

}
