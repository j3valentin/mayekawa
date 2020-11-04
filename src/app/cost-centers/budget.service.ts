import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Budget } from './budget';
import { BUDGETS } from './mock-budget';

@Injectable({ providedIn: 'root' })
export class BudgetService {
    getBudgets(): Observable<Budget[]> {
        return of(BUDGETS.sort((a, b) => b.start.getTime() - a.start.getTime()));
    }
}
