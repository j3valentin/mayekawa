import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Advance } from './advance';
import { ADVANCES } from './mock-advance';
import { AdvanceConcept } from './advance-concept';
import { ADVANCE_CONCEPTS } from './mock-advance-concept';
import { AdvanceDetail } from './advance-detail';
import { ADVANCE_DETAILS } from './mock-advance-details';

@Injectable({ providedIn: 'root' })
export class AdvanceService {
    getAdvances(): Observable<Advance[]> {
        return of(ADVANCES.sort((a, b) => b.start.getTime() - a.start.getTime()));
    }

    getAdvance(id: number): Observable<Advance> {
        return of(ADVANCES.find(advance => advance.id === id));
    }

    getConcepts(): Observable<AdvanceConcept[]> {
        return of(ADVANCE_CONCEPTS);
    }

    getDetails(id: number): Observable<AdvanceDetail[]> {
        return of(ADVANCE_DETAILS);
    }
}
