import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CostCenter } from './cost-center';
import { COST_CENTERS } from './mock-cost-center';

@Injectable({ providedIn: 'root' })
export class CostCenterService {
    getCostCenters(): Observable<CostCenter[]> {
        return of(COST_CENTERS);
    }

    getCostCenter(id: number): Observable<CostCenter> {
        return of(COST_CENTERS.find(costCenter => costCenter.id === id));
    }
}